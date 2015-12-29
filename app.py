#!/usr/bin/env python3

import os
from flask import Flask, render_template, url_for, redirect, request, session
from flask.ext.wtf import Form
from wtforms import StringField, SubmitField, PasswordField
from wtforms.validators import Required

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)


class MyForm(Form):
    username = StringField('Name: ', validators=[Required()])
    password = PasswordField('Password: ', validators=[Required()])
    submit = SubmitField('Submit')


@app.route('/')
def index():
    return render_template('index.html', title='Mohsin Ul Haq', style='index', script='index')


@app.route('/autocomplete')
def autocomplete():
    return render_template('autocomplete.html', title='Autocomplete', style='autocomplete', script='autocomplete')


@app.route('/radio')
def radio():
    return render_template('radio.html', title='Custom Radio', style='radio', script='')


@app.route('/regex')
def regex():
    return render_template('regex.html', title='Regex Validation', style='regex', script='regex')

@app.route('/facebook')
def facebook():
    return render_template('facebook.html', title='Facebook', style='facebook', script='facebook')

@app.route('/pagination')
def pagination():
    return render_template('pagination.html', title='Pagination', style='pagination', script='pagination')

@app.route('/about')
def about():
    return render_template('about.html', title='About Me', style='', script='')


@app.route('/form', methods=['GET', 'POST'])
def form():
    form = MyForm()
    if form.validate_on_submit():
        return redirect(url_for('index'))
    return render_template('form.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)
