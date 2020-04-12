"use strict";

class ScoutbookScout {
    constructor(bsaId, firstName, middleName, lastName, suffix) {
        this.bsaId = bsaId;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.suffix = suffix;
        this._id = this.bsaId + '_' + this.firstName + '_' + this.middleName + '_' + this.lastName + '_' + this.suffix;
    }

    get id() {
        return this._id;
    }
    set bsaId(value) {
        this._bsaId = value !== undefined ? value : '';
    }

    get bsaId() {
        return this._bsaId;
    }

    set firstName(value) {
        this._firstName = value !== undefined ? value : '';
    }

    get firstName() {
        return this._firstName;
    }

    set middleName(value) {
        this._middleName = value !== undefined ? value : '';
    }

    get middleName() {
        return this._middleName;
    }

    set lastName(value) {
        this._lastName = value !== undefined ? value : '';
    }

    get lastName() {
        return this._lastName;
    }

    set suffix(value) {
        this._suffix = value !== undefined ? value : '';
    }

    get suffix() {
        return this._suffix;
    }
}

module.exports = ScoutbookScout;