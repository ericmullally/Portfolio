
from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/")
def index():   
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")

@app.errorhandler(404)
def not_found(e):
    """Page not found."""
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)