import os
import glob

base_dir = r'c:\Users\murar\OneDrive\Desktop\Heritage_Link\fruitkha-1.0.0\fruitkha-1.0.0'
index_file = os.path.join(base_dir, 'index.html')
index_2_file = os.path.join(base_dir, 'index_2.html')
index_static = os.path.join(base_dir, 'index_static.html')

# Rename index.html -> index_static.html
if os.path.exists(index_file):
    os.rename(index_file, index_static)

# Rename index_2.html -> index.html
if os.path.exists(index_2_file):
    os.rename(index_2_file, index_file)

# Remove any references to index_2.html in all html files
html_files = glob.glob(os.path.join(base_dir, '*.html'))
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'index_2.html' in content:
        content = content.replace('index_2.html', 'index.html')
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("Successfully replaced static home with slider home.")
