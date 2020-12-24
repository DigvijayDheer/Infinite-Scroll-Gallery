global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash').default;
const toJson = require('unsplash').toJson;
const express = require('express');

const unsplash = new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});