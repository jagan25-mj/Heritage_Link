import os
import glob

html_files = glob.glob('c:\\Users\\murar\\OneDrive\\Desktop\\Heritage_Link\\fruitkha-1.0.0\\fruitkha-1.0.0\\*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace links
    content = content.replace('single-news.html', 'single-artisan.html')
    content = content.replace('news.html', 'artisans.html')
    
    # Replace navbar text
    content = content.replace('Craft Stories', 'Meet Artisans')
    content = content.replace('All Stories', 'All Artisans')
    content = content.replace('Featured Story', 'Featured Artisan')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

# Rename the actual files
os.rename('c:\\Users\\murar\\OneDrive\\Desktop\\Heritage_Link\\fruitkha-1.0.0\\fruitkha-1.0.0\\news.html', 
          'c:\\Users\\murar\\OneDrive\\Desktop\\Heritage_Link\\fruitkha-1.0.0\\fruitkha-1.0.0\\artisans.html')
os.rename('c:\\Users\\murar\\OneDrive\\Desktop\\Heritage_Link\\fruitkha-1.0.0\\fruitkha-1.0.0\\single-news.html', 
          'c:\\Users\\murar\\OneDrive\\Desktop\\Heritage_Link\\fruitkha-1.0.0\\fruitkha-1.0.0\\single-artisan.html')
