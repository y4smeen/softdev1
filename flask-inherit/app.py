from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    render_template("index.html")

@app.route('/about')
def about():
    render_template("about.html")

@app.route('/base')
def base():
    render_template("base.html")

if __name__ == "__main__":
    app.debug = True
    app.run('0.0.0.0', port=8000)
