import { RequestHandler } from 'express';
import fs from "fs";
import { AlignmentType, Document, Packer, Paragraph, TextRun } from "docx";

import glob from 'glob-promise';
import path from 'path';

const excludedFileTypes = ['.json', '.gitignore', '.lock', '.docx', '.png', '.jpg', '.jpeg', '.svg'];

export const readFile: RequestHandler = async (req, res, next) => {

    let arrays: {
        initial: Array<string>;
        filtered: Array<string>;
        final: Array<{
            title: string;
            content: any;
        }>;
    } = {
        initial: [],
        filtered: [],
        final: []
    };

    // replace directory
    const files = glob.sync('./files/arcs/src/**/*');

    arrays.initial = files;
    arrays.filtered = arrays.initial.filter(item => {
        const fileInfo = fs.lstatSync(item);
        const extension = path.extname(item);
        return !item.includes(excludedFileTypes[0])
            //     && !item.includes(excludedFileTypes[1])
            //     && !item.includes(excludedFileTypes[2])
            //     && !item.includes(excludedFileTypes[3])
            //     && !item.includes(excludedFileTypes[4])
            //     && !item.includes(excludedFileTypes[5])
            //     && !item.includes(excludedFileTypes[6])
            //     && !item.includes(excludedFileTypes[7])
            //     // && !item.includes(".scss") 
            //     // && !item.includes(".css") 
            && extension !== ""
            && !fileInfo.isDirectory()
            && fileInfo.isFile()
            && item.includes(".js");
    });
    arrays.final = arrays.filtered.map(item => {
        return {
            title: item,
            content: fs.readFileSync(item)
        };
    });

    res.setHeader("Content-Disposition", "attachment; filename=" + "arcs_js.docx");

    const finalChildren = arrays.final.map(item => {
        // console.log("🚀 ~ file: fileReader.ts:23 ~ finalChildren ~ item", item);
        return {
            properties: {},
            children: [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({ text: `${item.title}`, })
                    ]
                }),
                new Paragraph({
                    children: [
                        //
                        new TextRun({ text: `${item.content}`, break: 1 }),
                    ]
                })
            ],
        };

    });



    const doc = new Document({
        sections: finalChildren,
    });
    Packer.toBuffer(doc).then((buffer) => {
        // saveAs(blob, "example.docx");
        res.send(buffer);
        // res.download(fs.writeFileSync("My Document.docx", buffer));
        // res.download(buffer);
    });
};
