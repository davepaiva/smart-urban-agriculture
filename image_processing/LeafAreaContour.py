## Import all necessary libraries
import cv2 
import numpy as np 

#create a blank window to put all trackbars in 
cv2.namedWindow('image')

#callback  argument is required for trackbar creation parameters: in this case do nothing
def nothing(x):
     pass
 
#Create trackbars for each max and min value of HSV
cv2.createTrackbar('hue lower limit ', 'image',0,179,nothing)
cv2.createTrackbar('hue higher limit ', 'image',0,179,nothing)
cv2.createTrackbar('sat lower limit', 'image',0,255,nothing)
cv2.createTrackbar('sat higher limit', 'image',0,255,nothing)
cv2.createTrackbar('val lower limit', 'image',0,255,nothing)
cv2.createTrackbar('val higher limit', 'image',0,255,nothing)
#Import image and convert to HSV, since HSV is better than RGB in different lighting conditions
img= cv2.imread('hydrolettuce.jpg')
hsv= cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

#read trackbar positions for each trackbar
while(1):
    hul=cv2.getTrackbarPos('hue lower limit ', 'image')
    huh=cv2.getTrackbarPos('hue higher limit ', 'image')
    sal=cv2.getTrackbarPos('sat lower limit', 'image')
    sah=cv2.getTrackbarPos('sat higher limit', 'image')
    val=cv2.getTrackbarPos('val lower limit', 'image')
    vah=cv2.getTrackbarPos('val higher limit', 'image')
    #make array for final values
    #Define mask range, mask out non green elements, remove false positives using opening filter
    #The HSVLOW & HSVHIGH values will have to be tweaked from image to image OR for different lighting conditions.
    HSVLOW=np.array([30,137,0])
    HSVHIGH=np.array([65,255,255])
    #create a mask for that range
    mask = cv2.inRange(hsv,HSVLOW, HSVHIGH)
    #Create a kernek(slider) for Open morphology process (erosion and degrading)
    openslider= np.ones((25,25), np.uint8)       #slider can be changed
    maskOpen= cv2.morphologyEx(mask, cv2.MORPH_OPEN, openslider)
    #Display neccessary images
    cv2.imshow('hsv', hsv)
    cv2.imshow("Mask Open",maskOpen )
    key=cv2.waitKey(1)
    if key == 27:
        break

cv2.destroyAllWindows()


#Find the contours on the binary mask and store them in 'conts' list. Using the list, draw contours on orignal image
conts, _ = cv2.findContours(maskOpen,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_NONE)

area = []

for c in conts:
     contArea = cv2.contourArea(c)
     area.append(contArea)  # in PX uits
     
plantArea = max(area)*pixelPerUnitRatio  #in mm

cv2.drawContours(img,conts,-1,(0,0,255),3)
cv2.imshow('final image', img)
cv2.waitKey(0)
cv2.destroyAllWindows()



