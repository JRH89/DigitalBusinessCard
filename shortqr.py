import qrcode
import pyshorteners
from tkinter import *
from tkinter import messagebox

wn = Tk()
wn.title('QR Code Generator')
wn.geometry('500x600')

def generateCode():
    type_bitly = pyshorteners.Shortener(api_key='7dba01a7eca546247493dbbd10294430e184acef')
    short_url = type_bitly.bitly.short(text.get())

    qr = qrcode.QRCode(version=size.get(),
                       box_size=10,
                       border=5)
    qr.add_data(text.get())
    qr.make(fit=True)
    img = qr.make_image()
    fileDirec = loc.get() + '\\' + name.get()
    img.save(f'{fileDirec}.png')
    
    shortened_url_label.config(text="Shortened URL: " + short_url)
    output_box.delete(0, END)
    output_box.insert(0, short_url)
    messagebox.showinfo("QR Code Generator","QR Code and Shortened URL are saved successfully!")

headingLabel = Label(wn, text="QR Code Generator", font=('Arial',20,'bold'))
headingLabel.pack(pady=20)

urlFrame = Frame(wn)
urlFrame.pack(pady=10)

urlLabel = Label(urlFrame,text="Enter the URL: ", font=('Arial',14))
urlLabel.pack(side=LEFT)

text = Entry(urlFrame,font=('Arial',14))
text.pack(side=LEFT)

locFrame = Frame(wn)
locFrame.pack(pady=10)

locLabel = Label(locFrame,text="Save Location: ", font=('Arial',14))
locLabel.pack(side=LEFT)

loc = Entry(locFrame,font=('Arial',14))
loc.pack(side=LEFT)

nameFrame = Frame(wn)
nameFrame.pack(pady=10)

nameLabel = Label(nameFrame,text="Enter name for QR Code: ", font=('Arial',14))
nameLabel.pack(side=LEFT)

name = Entry(nameFrame,font=('Arial',14))
name.pack(side=LEFT)

sizeFrame = Frame(wn)
sizeFrame.pack(pady=10)

sizeLabel = Label(sizeFrame,text="Choose a size of QR Code: ", font=('Arial',14))
sizeLabel.pack(side=LEFT)

size = IntVar()
size.set(1)

smallRadio = Radiobutton(sizeFrame, text="Small", variable=size, value=1, font=('Arial',14))
smallRadio.pack(side=LEFT)

medRadio = Radiobutton(sizeFrame, text="Medium", variable=size, value=2, font=('Arial',14))
medRadio.pack(side=LEFT)

largeRadio = Radiobutton(sizeFrame, text="Large", variable=size, value=3, font=('Arial',14))
largeRadio.pack(side=LEFT)

shortened_url_label = Label(wn, text="Shortened URL: ", font=('Arial',14))
shortened_url_label.pack(pady=10)

output_box = Entry(wn, font=('Arial',14), width=50)
output_box.pack(pady=10)

buttonFrame = Frame(wn)
buttonFrame.pack(pady=20)

generateButton = Button(buttonFrame, text="Generate", font=('Arial',14), command=generateCode)
generateButton.pack()

wn.mainloop()
