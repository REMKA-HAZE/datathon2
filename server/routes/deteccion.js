const express = require('express');
const Deteccion = require('../models/deteccion');
const app = express();

app.post('/deteccion', (req, res) => {
    let body = req.body;
    let deteccion = new Deteccion({
        nom: body.nom,
        sex: body.sex,
        phone: body.phone,
        mail: body.mail,
        age: body.age,
        sg: body.sg,
        al: body.al,
        su: body.su,
        rbc: body.rbc,
        pc: body.pc,
        pcc: body.pcc,
        ba: body.ba,
        bgr: body.bgr,
        bu: body.bu,
        sc: body.sc,
        sod: body.sod,
        pot: body.pot,
        hemo: body.hemo,
        pcv: body.pcv,
        wc: body.wc,
        rc: body.rc,
        htn: body.htn,
        dm: body.dm,
        cad: body.cad,
        appet: body.appet,
        pe: body.pe,
        ane: body.ane,


    });

    if (deteccion.al = "0" && deteccion.su == "0" &&
        deteccion.rbc === "normal" && deteccion.pc === "normal" &&
        deteccion.pcc === "noPresent" &&
        deteccion.ba === "noPresent" && deteccion.dm === "No" &&
        deteccion.cad === "No" &&
        deteccion.appet === "good" && deteccion.pe === "No" &&
        deteccion.ane === "No") {

        console.log("notckd");
        deteccion.class = 'notckd';


    } else {
        deteccion.class = 'ckd';
    }

    deteccion.save((err, detDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            detDB
        });
    });
});

module.exports = app;