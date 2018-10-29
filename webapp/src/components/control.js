import React, {Component} from 'react';
import FileGenerate from './fileGenerate';
import FileSend from './fileSend';
import Search from './search';
import AppBar from './navbar/appBar';

export default (p) =>
      <div id="controlView">
        <div className="row">
          <h2>{p.title}</h2>
        </div>
        <div id="searchAndGenerate" className="row">
          <div className="col-md-3">
            <Search showProcess={p.showProcess} dateProcess={p.dateProcess} isSearch={p.isSearch}
              placeholderSearch={p.placeholderSearch} isText={p.isText}
            />
          </div>
          {
            p.isGenerate ? <div className="col-md-5  col-md-offset-4 pull-right"><FileGenerate generarArchivo={p.generarArchivo} listaProcesos={p.listaProcesos}
              completed={p.completed} service={p.service} forceGenerate={p.forceGenerate} /></div> : ""
          }
          {
            p.isSend ? <div className="col-md-6 col-md-offset-3"><FileSend /></div> : ""
          }
        </div>
      </div>
