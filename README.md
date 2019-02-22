---


---

<h1 id="simple-leaf-area-detection">Simple Leaf Area Detection</h1>
<h2 id="introduction">Introduction</h2>
<p><em>This simple python script makes use of OpenCV library. It is part of my final year project. The project revolves around hydroponics, where plants are grown in a controlled environment, enclosed within a system designed by my team, that is customized for use in apartments and other small urban areas.All parameters involved in growing the plants are controlled and hence this image processing technique is used to check leaf size and hence the development stage of the plants. Thus tracking the progress of the system and checking for anomalies .<br>
The Raspberry Pi and a camera module will be used to capture the image and run the Python script.</em></p>
<h3 id="libraries">Libraries</h3>
<p>We’ll be using an opensource library known as <em>OpenCV</em>, which is an open source real-time computer vision library originally developed by <em>Intel</em> that can be implemented using <em>C++</em> or <em>Python</em>.<br>
For this particular case , I will be implementing it in Python3 (<em>env: Spyder, OS: Ubuntu 18.10)</em> so if you don’t already have it , on the terminal go ahead and :</p>
<pre><code>pip3 install opencv
</code></pre>
<p>Check out the complete <em>OpenCV</em> documentation <a href="https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_tutorials.html">here</a>.</p>
<h2 id="method">Method</h2>
<ul>
<li>The leaves will be segmented by filtering the image by color, by setting a binary filter mask  to allow only shades of green.</li>
<li>The area which contains the green color is seen as <strong>True</strong> <em>(White)</em>.</li>
<li>The area which does not contain green color is seen as <strong>False</strong> <em>(Black)</em>.</li>
<li>By drawing contours on the interface of True and False area we can get an estimate of the leaf sizes in pixels. This is done so as to avoid and other necessary contours that may be plotted on the image due to noise or other object boundaries and also to avoid blurring the image by using clustering (which is a slower process)  to get distinct objects based on colored clusters.</li>
<li>To get the actual size of the leaves we need to find the pixels per inch resolution of the camera.</li>
<li>I will b using trackbars provided by OpenCV to make it easier to obtain the threshold values for the mask.</li>
</ul>
<h2 id="python-code">Python Code</h2>
<p>With reference to <a href="https://github.com/davepaiva/smart-urban-agriculture/commit/bf4a09c24de4ca050784d6071ffd7a1778c5514d" title="Update LeafAreaContour.py">LeafAreaContour.py</a>.</p>
<p>Comments in code are self explanatory.</p>
<p><strong>Documentations on OpenCV methods and functions used :</strong></p>
<ul>
<li><a href="https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_gui/py_image_display/py_image_display.html#py-display-image">Loading, saving, displaying images, display windows and GUI</a></li>
<li><a href="https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_gui/py_trackbar/py_trackbar.html">TrackBars</a></li>
<li><em><a href="https://docs.opencv.org/3.4/da/d97/tutorial_threshold_inRange.html">inRange</a></em> function used to set limiting threshold values to the mask.</li>
<li><a href="https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_imgproc/py_morphological_ops/py_morphological_ops.html">Morphological Transformations</a> (Erosion, Dilation, Opening, Closing).</li>
<li><a href="https://docs.opencv.org/3.3.1/d4/d73/tutorial_py_contours_begin.html">Contours</a></li>
</ul>

