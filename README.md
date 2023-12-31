# Basic Machine Learning Dashboard
The purpose was to make a basic machine learning dashboard to demonstrate a classification via a web interface. The project has been written in **Javascript** and **HTML-CSS** for frontend and **Python** for classification.
## Technologies behind the project
The main frameworks to mention:
1. NextJs 
2. Python Flask

Some Additional libraries:
1. Material UI
2. Axios
3. Some other python decencies - mentioned in *requirements.txt*

## How to get started

To run the the project locally, you need to first start the NextJs server which is containing the main user interface. To do this, first clone/download the project from  [here](https://github.com/Brainless-Loco/basic-machine-learning-dashboard). Now go the project directory and open a **CMD** or any **console** you have. I assume that you already have Node.Js installed in your local machine. If not so, first download and install it from [here](https://nodejs.org/en).  Now write this commands:
* `npm i` - This will install all the necessary node dependencies into your project folder to run it.
* `npm run dev` - This will let your local machine run the project into the default port ***localhost:3000***. 
* Open your browser, type ***localhost:3000*** and enter. Let just your local machine compile the project for a while and then you can see the interface.

You can't classify anything yet. You need to start the python server first. To do it first download the flask project from  [here](https://github.com/Brainless-Loco/basic-machine-learning-dashboard-python-server). I assume that you already have **python 3.10+** installed in your local machine. If not so, please download it from [here](https://www.python.org/downloads/).  Now you need to first install the dependencies and then start the python server. Go to the flask project directory and open a console here again. Now write,
* `pip install -r requirements.txt` - This will let you to install all the dependencies that was written in the *requirements.txt* file. If you hadn't install **pip** you need to install it first. If the command still gets any error type `py -m pip install -r requirements.txt` and then enter. 
* `py app.py` - This will let you to run a python flask server for the project. You will see the project run info with the address along with the default port (**localhost:5000**) for python flask.

But still you may get some error if you try classifying a text. This is because of the change of IP. Copy your python flask address first which may seem like ***192.168.XXX.XX:5000*** from the console and paste it into your [this](https://github.com/Brainless-Loco/basic-machine-learning-dashboard/blob/main/components/IOforDetection/IoforDetection.js) page at **line 33** in your Next Js Project.

Now reload the web interface and try classifying again. Hopefully you will be able to classify the text from now.

In case you face any issues or have any queries let me know via [email](tonmoy.csecu@gmail.com).

Thank you.
> [Brainless Loco](https://github.com/Brainless-Loco)