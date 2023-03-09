import qrcode
import base64
import json

# Get the URL from the POST data
data = json.loads(sys.stdin.read())
url = data['url']

# Generate the QR code image
qr = qrcode.QRCode(version=1, box_size=10, border=4)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")

# Convert the image to base64-encoded PNG format
output = io.BytesIO()
img.save(output, format='PNG')
base64_image = base64.b64encode(output.getvalue()).decode('ascii')

# Output the base64-encoded image
print(base64_image)
