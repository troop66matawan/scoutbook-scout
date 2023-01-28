"use strict";
const ScoutbookAdvancement = require('scoutbook-advancement/advancement');
const ScoutbookActivities = require('scoutbook-activities');
const ScoutbookLeadership = require('scoutbook-leadership');

class ScoutbookScout {
    constructor(bsaId, firstName, middleName, lastName, suffix) {
        this.bsaId = bsaId;
        this.firstName = firstName ? firstName.trim() : undefined;
        this.middleName = middleName ? middleName.trim() : undefined;
        this.lastName = lastName ? lastName.trim() : undefined;
        this.suffix = suffix;
        this._id = this.bsaId + '_' + this.firstName +  '_' + this.lastName;
        this._advancement = new ScoutbookAdvancement();
        this._activities = new ScoutbookActivities();
        this._leadership = new ScoutbookLeadership();
    }

    get advancement() {
        return this._advancement;
    }
    get activities() {
        return this._activities;
    }
    get leadership() {
        return this._leadership;
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
    
    set nickname(value) {
        this._nickname = value !== undefined ? value : '';
    }

    get nickname() {
        return this._nickname;
    }




    set address1(value) {
        this._address1 = value !== undefined ? value : '';
    }

    get address1() {
        return this._address1;
    }

    set address2(value) {
        this._address2 = value !== undefined ? value : '';
    }

    get address2() {
        return this._address2;
    }

    set city(value) {
        this._city = value !== undefined ? value : '';
    }

    get city() {
        return this._city;
    }

    set state(value) {
        this._state = value !== undefined ? value : '';
    }

    get state() {
        return this._state;
    }

    set zip(value) {
        this._zip = value !== undefined ? value : '';
    }

    get zip() {
        return this._zip;
    }

    set homePhone(value) {
        this._homePhone = value !== undefined ? value : '';
    }

    get homePhone() {
        return this._homePhone;
    }

    set gender(value) {
        this._gender = value !== undefined ? value : '';
    }

    get gender() {
        return this._gender;
    }

    set dob(value) {
        this._dob = value !== undefined ? value : '';
    }

    get dob() {
        return this._dob;
    }

    set schoolGrade(value) {
        this._schoolGrade = value !== undefined ? value : '';
    }

    get schoolGrade() {
        return this._schoolGrade;
    }

    set schoolName(value) {
        this._schoolName = value !== undefined ? value : '';
    }

    get schoolName() {
        return this._schoolName;
    }

    set swimmingClassification(value) {
        this._swimmingClassification = value !== undefined ? value : '';
    }

    get swimmingClassification() {
        return this._swimmingClassification;
    }

    set swimmingClassificationDate(value) {
        this._swimmingClassificationDate = value !== undefined ? value : '';
    }

    get swimmingClassificationDate() {
        return this._swimmingClassificationDate;
    }

    set unitNumber(value) {
        this._unitNumber = value !== undefined ? value : '';
    }

    get unitNumber() {
        return this._unitNumber;
    }

    set unitType(value) {
        this._unitType = value !== undefined ? value : '';
    }

    get unitType() {
        return this._unitType;
    }

    set LDS(value) {
        this._LDS = value !== undefined ? value : '';
    }

    get LDS() {
        return this._LDS;
    }

    set dateJoinedBSA(value) {
        this._dateJoinedBSA = value !== undefined ? value : '';
    }

    get dateJoinedBSA() {
        return this._dateJoinedBSA;
    }

    set denType(value) {
        this._denType = value !== undefined ? value : '';
    }

    get denType() {
        return this._denType;
    }

    set denNumber(value) {
        this._denNumber = value !== undefined ? value : '';
    }

    get denNumber() {
        return this._denNumber;
    }

    set dateJoinedDen(value) {
        this._dateJoinedDen = value !== undefined ? value : '';
    }

    get dateJoinedDen() {
        return this._dateJoinedDen;
    }

    set patrolName(value) {
        this._patrolName = value !== undefined ? value : '';
    }

    get patrolName() {
        return this._patrolName;
    }

    set dateJoinedPatrol(value) {
        this._dateJoinedPatrol = value !== undefined ? value : '';
    }

    get dateJoinedPatrol() {
        return this._dateJoinedPatrol;
    }

    set parent1Email(value) {
        this._parent1Email = value !== undefined ? value : '';
    }

    get parent1Email() {
        return this._parent1Email;
    }

    set parent2Email(value) {
        this._parent2Email = value !== undefined ? value : '';
    }

    get parent2Email() {
        return this._parent2Email;
    }

    set parent3Email(value) {
        this._parent3Email = value !== undefined ? value : '';
    }

    get parent3Email() {
        return this._parent3Email;
    }

    set oaMemberNum(value) {
        this._oaMemberNum = value !== undefined ? value : '';
    }

    get oaMemberNum() {
        return this._oaMemberNum;
    }

    set oaElectionDate(value) {
        this._oaElectionDate = value !== undefined ? value : '';
    }

    get oaElectionDate() {
        return this._oaElectionDate;
    }

    set oaOrdealDate(value) {
        this._oaOrdealDate = value !== undefined ? value : '';
    }

    get oaOrdealDate() {
        return this._oaOrdealDate;
    }

    set oaBrotherhoodDate(value) {
        this._oaBrotherhoodDate = value !== undefined ? value : '';
    }

    get oaBrotherhoodDate() {
        return this._oaBrotherhoodDate;
    }

    set oaVigilDate(value) {
        this._oaVigilDate = value !== undefined ? value : '';
    }

    get oaVigilDate() {
        return this._oaVigilDate;
    }

    set oaActive(value) {
        this._oaActive = value !== undefined ? value : '';
    }

    get oaActive() {
        return this._oaActive;
    }

}

module.exports = ScoutbookScout;