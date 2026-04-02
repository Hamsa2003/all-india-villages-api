import pandas as pd
import os

# 📂 Folder path (update if needed)
folder_path = r"C:\Users\hamsa\Downloads\dataset\dataset"

print("🚀 Script Started")

all_data = []

# 🔁 Read all files
for file in os.listdir(folder_path):
    file_path = os.path.join(folder_path, file)
    
    print("📄 Reading:", file)

    try:
        if file.endswith(".xls"):
            df = pd.read_excel(file_path, engine="xlrd")

        elif file.endswith(".xlsx"):
            df = pd.read_excel(file_path, engine="openpyxl")

        elif file.endswith(".ods"):
            print("⚠️ Skipping ODS file:", file)
            continue   # skip ODS

        else:
            continue

        all_data.append(df)

    except Exception as e:
        print(f"❌ Error reading {file}: {e}")

# ❗ Check if data loaded
if len(all_data) == 0:
    print("❌ No data loaded. Check dataset folder.")
    exit()

print(f"\n✅ Total files loaded: {len(all_data)}")

# 🔗 Combine all data
combined_df = pd.concat(all_data, ignore_index=True)

print("\n📌 Raw Columns:")
print(combined_df.columns)


# ================= FINAL CLEANING =================

# 🧹 Select required columns
df = combined_df[[
    'STATE NAME',
    'DISTRICT NAME',
    'SUB-DISTRICT NAME',
    'Area Name'
]]

# ✏️ Rename columns
df.columns = ['state', 'district', 'subdistrict', 'village']

# 🧼 Clean text
for col in df.columns:
    df[col] = df[col].astype(str).str.strip().str.title()

# ❌ Remove missing values
df = df.dropna()

# 🔁 Remove duplicates
df = df.drop_duplicates()

# ❌ Remove invalid rows (same values)
df = df[~(
    (df['state'] == df['district']) &
    (df['district'] == df['subdistrict']) &
    (df['subdistrict'] == df['village'])
)]

# ❌ Remove rows where village = district
df = df[df['village'] != df['district']]

# 🔍 Final preview
print("\n✅ FINAL CLEANED DATA:")
print(df.head())

print("\n📌 FINAL COLUMNS:")
print(df.columns)


# ================= SAVE =================

output_file = "final_cleaned_villages.csv"
df.to_csv(output_file, index=False)

print(f"\n🎉 SUCCESS: Cleaned file saved as {output_file}")