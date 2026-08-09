import os
from PIL import Image
from rembg import remove

input_dir = os.path.join("public", "assets", "img", "products")
output_dir = os.path.join(input_dir, "ecommerce")

images_to_process = [
    'bullcart2.jpg',
    'bullcart3.jpg',
    'bullcart4.jpg',
    'bullcart6.jpg',
    'marriagepair2.jpg',
    'marriagepair3.jpg',
    'marriagemandapam2.jpg',
    'marriagemandapam3.jpg'
]

for filename in images_to_process:
    input_path = os.path.join(input_dir, filename)
    output_path = os.path.join(output_dir, f"ecommerce_{filename}")
    
    if not os.path.exists(input_path):
        print(f"Skipping {filename}, not found.")
        continue
        
    print(f"Processing {filename}...")
    try:
        # Read the image
        input_image = Image.open(input_path)
        
        # Remove background (returns an RGBA image)
        output_image = remove(input_image)
        
        # Create a white background image of the same size
        white_bg = Image.new("RGBA", output_image.size, "WHITE")
        
        # Paste the foreground over the white background
        white_bg.paste(output_image, (0, 0), output_image)
        
        # Resize to 1024x1024 to fit our standard
        white_bg = white_bg.resize((1024, 1024), Image.Resampling.LANCZOS)
        
        # Convert to RGB and save as JPEG
        final_image = white_bg.convert("RGB")
        final_image.save(output_path, "JPEG")
        
        print(f"Successfully saved {output_path}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")
