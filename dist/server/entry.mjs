globalThis.process = {
	argv: [],
	env: Deno.env.toObject(),
};
// dist/server/entry.mjs
import { Server } from "https://deno.land/std@0.132.0/http/server.ts";
import { fetch } from "https://deno.land/x/file_fetch/mod.ts";
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null);
  this._extensions = /* @__PURE__ */ Object.create(null);
  for (let i2 = 0; i2 < arguments.length; i2++) {
    this.define(arguments[i2]);
  }
  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}
Mime$1.prototype.define = function(typeMap, force) {
  for (let type in typeMap) {
    let extensions = typeMap[type].map(function(t2) {
      return t2.toLowerCase();
    });
    type = type.toLowerCase();
    for (let i2 = 0; i2 < extensions.length; i2++) {
      const ext = extensions[i2];
      if (ext[0] === "*") {
        continue;
      }
      if (!force && ext in this._types) {
        throw new Error(
          'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
        );
      }
      this._types[ext] = type;
    }
    if (force || !this._extensions[type]) {
      const ext = extensions[0];
      this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
    }
  }
};
Mime$1.prototype.getType = function(path) {
  path = String(path);
  let last = path.replace(/^.*[/\\]/, "").toLowerCase();
  let ext = last.replace(/^.*\./, "").toLowerCase();
  let hasPath = last.length < path.length;
  let hasDot = ext.length < last.length - 1;
  return (hasDot || !hasPath) && this._types[ext] || null;
};
Mime$1.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};
var Mime_1 = Mime$1;
var standard = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
var other = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
var Mime = Mime_1;
var mime = new Mime(standard, other);
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e2) {
    return str;
  }
}
var __accessCheck$3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$3 = (obj, member, getter) => {
  __accessCheck$3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$3 = (obj, member, value, setter) => {
  __accessCheck$3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod$1 = (obj, member, method) => {
  __accessCheck$3(obj, member, "access private method");
  return method;
};
var _request;
var _requestValues;
var _outgoing;
var _ensureParsed;
var ensureParsed_fn;
var _ensureOutgoingMap;
var ensureOutgoingMap_fn;
var _parse;
var parse_fn;
var DELETED_EXPIRATION = new Date(0);
var DELETED_VALUE = "deleted";
var AstroCookie = class {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
};
var AstroCookies = class {
  constructor(request) {
    __privateAdd$3(this, _ensureParsed);
    __privateAdd$3(this, _ensureOutgoingMap);
    __privateAdd$3(this, _parse);
    __privateAdd$3(this, _request, void 0);
    __privateAdd$3(this, _requestValues, void 0);
    __privateAdd$3(this, _outgoing, void 0);
    __privateSet$3(this, _request, request);
    __privateSet$3(this, _requestValues, null);
    __privateSet$3(this, _outgoing, null);
  }
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options == null ? void 0 : options.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options == null ? void 0 : options.path) {
      serializeOptions.path = options.path;
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      DELETED_VALUE,
      serialize_1(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  get(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [serializedValue, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return new AstroCookie(void 0);
      }
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    const value = values[key];
    return new AstroCookie(value);
  }
  has(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      return isSetValue;
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    return !!values[key];
  }
  set(key, value, options) {
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      serializedValue,
      serialize_1(key, serializedValue, serializeOptions),
      true
    ]);
  }
  *headers() {
    if (__privateGet$3(this, _outgoing) == null)
      return;
    for (const [, value] of __privateGet$3(this, _outgoing)) {
      yield value[1];
    }
  }
};
_request = /* @__PURE__ */ new WeakMap();
_requestValues = /* @__PURE__ */ new WeakMap();
_outgoing = /* @__PURE__ */ new WeakMap();
_ensureParsed = /* @__PURE__ */ new WeakSet();
ensureParsed_fn = function() {
  if (!__privateGet$3(this, _requestValues)) {
    __privateMethod$1(this, _parse, parse_fn).call(this);
  }
  if (!__privateGet$3(this, _requestValues)) {
    __privateSet$3(this, _requestValues, {});
  }
  return __privateGet$3(this, _requestValues);
};
_ensureOutgoingMap = /* @__PURE__ */ new WeakSet();
ensureOutgoingMap_fn = function() {
  if (!__privateGet$3(this, _outgoing)) {
    __privateSet$3(this, _outgoing, /* @__PURE__ */ new Map());
  }
  return __privateGet$3(this, _outgoing);
};
_parse = /* @__PURE__ */ new WeakSet();
parse_fn = function() {
  const raw = __privateGet$3(this, _request).headers.get("cookie");
  if (!raw) {
    return;
  }
  __privateSet$3(this, _requestValues, parse_1(raw));
};
var astroCookiesSymbol = Symbol.for("astro.cookies");
function attachToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return;
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
}
function baseCreateComponent(cb, moduleId) {
  cb.isAstroComponentFactory = true;
  cb.moduleId = moduleId;
  return cb;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId);
  cb.propagation = opts.propagation;
  return cb;
}
function createComponent(arg1, moduleId) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId);
  } else {
    return createComponentWithOptions(arg1);
  }
}
var ASTRO_VERSION = "1.9.2";
function createDeprecatedFetchContentFn() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(filePathname, _site, projectRootStr) {
  const site = _site ? new URL(_site) : void 0;
  const referenceURL = new URL(filePathname, `http://localhost`);
  const projectRoot = new URL(projectRootStr);
  return {
    site,
    generator: `Astro v${ASTRO_VERSION}`,
    fetchContent: createDeprecatedFetchContentFn(),
    glob: createAstroGlobFn(),
    resolve(...segments) {
      let resolved = segments.reduce((u2, segment) => new URL(segment, u2), referenceURL).pathname;
      if (resolved.startsWith(projectRoot.pathname)) {
        resolved = "/" + resolved.slice(projectRoot.pathname.length);
      }
      return resolved;
    }
  };
}
function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, context, ssr) {
  var _a2;
  const { request, params } = context;
  const chosenMethod = (_a2 = request.method) == null ? void 0 : _a2.toLowerCase();
  const handler = getHandlerFromModule(mod, chosenMethod);
  if (!ssr && ssr === false && chosenMethod && chosenMethod !== "get") {
    console.warn(`
${chosenMethod} requests are not available when building a static site. Update your config to output: 'server' to handle ${chosenMethod} requests.`);
  }
  if (!handler || typeof handler !== "function") {
    let response = new Response(null, {
      status: 404,
      headers: {
        "X-Astro-Response": "Not-Found"
      }
    });
    return response;
  }
  if (handler.length > 1) {
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  }
  const proxy = new Proxy(context, {
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else if (prop in params) {
        console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`);
        return Reflect.get(params, prop);
      } else {
        return void 0;
      }
    }
  });
  return handler.call(mod, proxy, request);
}
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
var pe = (m2) => esca[m2];
var escape = (es) => replace.call(es, ca, pe);
var escapeHTML = escape;
var HTMLString = class extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
};
var markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}
var AstroJSX = "astro:jsx";
var Empty = Symbol("empty");
var toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v2) => v2 !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c2) => markRawChildren(c2));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}
var idle_prebuilt_default = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;
var load_prebuilt_default = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;
var media_prebuilt_default = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;
var only_prebuilt_default = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;
var visible_prebuilt_default = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;
var astro_island_prebuilt_default = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
var hydrationScripts = {
  idle: idle_prebuilt_default,
  load: load_prebuilt_default,
  only: only_prebuilt_default,
  media: media_prebuilt_default,
  visible: visible_prebuilt_default
};
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(directive) {
  if (!(directive in hydrationScripts)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts[directive];
  return directiveScriptText;
}
function getPrescripts(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(directive) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(directive)}<\/script>`;
  }
  return "";
}
var headAndContentSym = Symbol.for("astro.headAndContent");
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}
function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}
var _a$5;
var renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
var RenderTemplateResult = class {
  constructor(htmlParts, expressions) {
    this[_a$5] = true;
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  get [(_a$5 = renderTemplateResultSym, Symbol.toStringTag)]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts, expressions } = this;
    for (let i2 = 0; i2 < htmlParts.length; i2++) {
      const html = htmlParts[i2];
      const expression = expressions[i2];
      yield markHTMLString(html);
      yield* renderChild(expression);
    }
  }
};
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
async function* renderAstroTemplateResult(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
async function renderToString(result, componentFactory, props, children) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    const response = factoryResult;
    throw response;
  }
  let parts = new HTMLParts();
  const templateResult = isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
  for await (const chunk of renderAstroTemplateResult(templateResult)) {
    parts.append(chunk, result);
  }
  return parts.toString();
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.propagation.has(factory.moduleId) && hint === "none") {
    hint = result.propagation.get(factory.moduleId);
  }
  return hint === "in-tree" || hint === "self";
}
var defineErrors = (errs) => errs;
var AstroErrorData = defineErrors({
  UnknownCompilerError: {
    title: "Unknown compiler error.",
    code: 1e3
  },
  StaticRedirectNotAvailable: {
    title: "`Astro.redirect` is not available in static mode.",
    code: 3001,
    message: "Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  ClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in current adapter.",
    code: 3002,
    message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
  },
  StaticClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in static mode.",
    code: 3003,
    message: "`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  NoMatchingStaticPathFound: {
    title: "No static path found for requested path.",
    code: 3004,
    message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
    hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
  },
  OnlyResponseCanBeReturned: {
    title: "Invalid type returned by Astro page.",
    code: 3005,
    message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
  },
  MissingMediaQueryDirective: {
    title: "Missing value for `client:media` directive.",
    code: 3006,
    message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
  },
  NoMatchingRenderer: {
    title: "No matching renderer found.",
    code: 3007,
    message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are." : "is."} ${validRenderersCount} renderer${plural ? "s." : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were." : "it was not."} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
    hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
  },
  NoClientEntrypoint: {
    title: "No client entrypoint specified in renderer.",
    code: 3008,
    message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
    hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
  },
  NoClientOnlyHint: {
    title: "Missing hint on client:only directive.",
    code: 3009,
    message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
  },
  InvalidGetStaticPathParam: {
    title: "Invalid value returned by a `getStaticPaths` path.",
    code: 3010,
    message: (paramType) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${paramType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  InvalidGetStaticPathsReturn: {
    title: "Invalid value returned by getStaticPaths.",
    code: 3011,
    message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRemovedRSSHelper: {
    title: "getStaticPaths RSS helper is not available anymore.",
    code: 3012,
    message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
    hint: "See https://docs.astro.build/en/guides/rss/ for more information."
  },
  GetStaticPathsExpectedParams: {
    title: "Missing params property on `getStaticPaths` route.",
    code: 3013,
    message: "Missing or empty required `params` property on `getStaticPaths` route.",
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsInvalidRouteParam: {
    title: "Invalid value for `getStaticPaths` route parameter.",
    code: 3014,
    message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRequired: {
    title: "`getStaticPaths()` function required for dynamic routes.",
    code: 3015,
    message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
    hint: `See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
  },
  ReservedSlotName: {
    title: "Invalid slot name.",
    code: 3016,
    message: (slotName2) => `Unable to create a slot named \`${slotName2}\`. \`${slotName2}\` is a reserved slot name. Please update the name of this slot.`
  },
  NoAdapterInstalled: {
    title: "Cannot use Server-side Rendering without an adapter.",
    code: 3017,
    message: `Cannot use \`output: 'server'\` without an adapter. Please install and configure the appropriate server adapter for your final deployment.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information."
  },
  NoMatchingImport: {
    title: "No import found for component.",
    code: 3018,
    message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
    hint: "Please make sure the component is properly imported."
  },
  InvalidPrerenderExport: {
    title: "Invalid prerender export.",
    code: 3019,
    message: (prefix, suffix) => {
      let msg = `A \`prerender\` export has been detected, but its value cannot be statically analyzed.`;
      if (prefix !== "const")
        msg += `
Expected \`const\` declaration but got \`${prefix}\`.`;
      if (suffix !== "true")
        msg += `
Expected \`true\` value but got \`${suffix}\`.`;
      return msg;
    },
    hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`."
  },
  UnknownViteError: {
    title: "Unknown Vite Error.",
    code: 4e3
  },
  FailedToLoadModuleSSR: {
    title: "Could not import file.",
    code: 4001,
    message: (importName) => `Could not import \`${importName}\`.`,
    hint: "This is often caused by a typo in the import path. Please make sure the file exists."
  },
  InvalidGlob: {
    title: "Invalid glob pattern.",
    code: 4002,
    message: (globPattern) => `Invalid glob pattern: \`${globPattern}\`. Glob patterns must start with './', '../' or '/'.`,
    hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."
  },
  UnknownCSSError: {
    title: "Unknown CSS Error.",
    code: 5e3
  },
  CSSSyntaxError: {
    title: "CSS Syntax Error.",
    code: 5001
  },
  UnknownMarkdownError: {
    title: "Unknown Markdown Error.",
    code: 6e3
  },
  MarkdownFrontmatterParseError: {
    title: "Failed to parse Markdown frontmatter.",
    code: 6001
  },
  MarkdownContentSchemaValidationError: {
    title: "Content collection frontmatter invalid.",
    code: 6002,
    message: (collection, entryId, error2) => {
      return [
        `${String(collection)} \u2192 ${String(entryId)} frontmatter does not match collection schema.`,
        ...error2.errors.map((zodError) => zodError.message)
      ].join("\n");
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas."
  },
  UnknownConfigError: {
    title: "Unknown configuration error.",
    code: 7e3
  },
  ConfigNotFound: {
    title: "Specified configuration file not found.",
    code: 7001,
    message: (configFile) => `Unable to resolve \`--config "${configFile}"\`. Does the file exist?`
  },
  ConfigLegacyKey: {
    title: "Legacy configuration detected.",
    code: 7002,
    message: (legacyConfigKey) => `Legacy configuration detected: \`${legacyConfigKey}\`.`,
    hint: "Please update your configuration to the new format.\nSee https://astro.build/config for more information."
  },
  UnknownCLIError: {
    title: "Unknown CLI Error.",
    code: 8e3
  },
  GenerateContentTypesError: {
    title: "Failed to generate content types.",
    code: 8001,
    message: "`astro sync` command failed to generate content collection types.",
    hint: "Check your `src/content/config.*` file for typos."
  },
  UnknownError: {
    title: "Unknown Error.",
    code: 99999
  }
});
function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function getErrorDataByCode(code) {
  const entry = Object.entries(AstroErrorData).find((data) => data[1].code === code);
  if (entry) {
    return {
      name: entry[0],
      data: entry[1]
    };
  }
}
function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n2 = -2; n2 <= 2; n2++) {
    if (lines[loc.line + n2])
      visibleLines.push(loc.line + n2);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w2 = `> ${lineNo}`;
    if (w2.length > gutterWidth)
      gutterWidth = w2.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}
var AstroError = class extends Error {
  constructor(props, ...params) {
    var _a2;
    super(...params);
    this.type = "AstroError";
    const { code, name, title, message, stack, location, hint, frame } = props;
    this.errorCode = code;
    if (name && name !== "Error") {
      this.name = name;
    } else {
      this.name = ((_a2 = getErrorDataByCode(this.errorCode)) == null ? void 0 : _a2.name) ?? "UnknownError";
    }
    this.title = title;
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setErrorCode(errorCode) {
    this.errorCode = errorCode;
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err.type === "AstroError";
  }
};
var PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v2) => {
    return convertToSerializedForm(v2, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k2, v2]) => {
      return [k2, convertToSerializedForm(v2, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}
var HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
var HydrationDirectives = new Set(HydrationDirectivesRaw);
var HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((n2) => `client:${n2}`));
function extractDirectives(displayName, inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives.has(extracted.hydration.directive)) {
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(
                HydrationDirectiveProps
              ).join(", ")}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(AstroErrorData.MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}
var _a$4;
var astroComponentInstanceSym = Symbol.for("astro.componentInstance");
var AstroComponentInstance = class {
  constructor(result, props, slots, factory) {
    this[_a$4] = true;
    this.result = result;
    this.props = props;
    this.factory = factory;
    this.slotValues = {};
    for (const name in slots) {
      this.slotValues[name] = slots[name]();
    }
  }
  async init() {
    this.returnValue = this.factory(this.result, this.props, this.slotValues);
    return this.returnValue;
  }
  async *render() {
    if (this.returnValue === void 0) {
      await this.init();
    }
    let value = this.returnValue;
    if (isPromise(value)) {
      value = await value;
    }
    if (isHeadAndContent(value)) {
      yield* value.content;
    } else {
      yield* renderChild(value);
    }
  }
};
_a$4 = astroComponentInstanceSym;
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps.has(prop)) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory) && !result.propagators.has(factory)) {
    result.propagators.set(factory, instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}
async function* renderChild(child) {
  child = await child;
  if (child instanceof SlotString) {
    if (child.instructions) {
      yield* child.instructions;
    }
    yield child;
  } else if (isHTMLString(child)) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString(await renderChild(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0)
    ;
  else if (isRenderTemplateResult(child)) {
    yield* renderAstroTemplateResult(child);
  } else if (isAstroComponentInstance(child)) {
    yield* child.render();
  } else if (ArrayBuffer.isView(child)) {
    yield child;
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    yield* child;
  } else {
    yield child;
  }
}
var slotString = Symbol.for("astro:slot-string");
var SlotString = class extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
};
function isSlotString(str) {
  return !!str[slotString];
}
async function renderSlot(_result2, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild(slotted);
    let content = "";
    let instructions = null;
    for await (const chunk of iterator) {
      if (chunk.type === "directive") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString(new SlotString(content, instructions));
  }
  return fallback;
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlot(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}
var Fragment = Symbol.for("astro:fragment");
var Renderer = Symbol.for("astro:renderer");
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  switch (chunk.type) {
    case "directive": {
      const { hydration } = chunk;
      let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
      let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
      let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
      if (prescriptType) {
        let prescripts = getPrescripts(prescriptType, hydration.directive);
        return markHTMLString(prescripts);
      } else {
        return "";
      }
    }
    default: {
      if (isSlotString(chunk)) {
        let out = "";
        const c2 = chunk;
        if (c2.instructions) {
          for (const instr of c2.instructions) {
            out += stringifyChunk(result, instr);
          }
        }
        out += chunk.toString();
        return out;
      }
      return chunk.toString();
    }
  }
}
var HTMLParts = class {
  constructor() {
    this.parts = "";
  }
  append(part, result) {
    if (ArrayBuffer.isView(part)) {
      this.parts += decoder.decode(part);
    } else {
      this.parts += stringifyChunk(result, part);
    }
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder.encode(this.parts);
  }
};
function chunkToByteArray(result, chunk) {
  if (chunk instanceof Uint8Array) {
    return chunk;
  }
  return encoder.encode(stringifyChunk(result, chunk));
}
var ClientOnlyPlaceholder = "astro-client-only";
var Skip = class {
  constructor(vnode) {
    this.vnode = vnode;
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return this.count === 0;
  }
  isCompleted() {
    return this.count > 2;
  }
};
Skip.symbol = Symbol("astro:jsx:skip");
var originalConsoleError$1;
var consoleFilterRefs$1 = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v2) => renderJSX(result, v2)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        return markHTMLString(await renderToString(result, vnode.type, props, slots));
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement$1(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c2) => extractSlots2(c2));
        }
        if (!isVNode(child)) {
          _slots2.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots2[child.props.slot] = [..._slots2[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots2.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter$1();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2 && output2[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e2) {
            if (skip.isCompleted()) {
              throw e2;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter$1();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots2 = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots2[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots2)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToIterable(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToIterable(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let parts = new HTMLParts();
        for await (const chunk of output) {
          parts.append(chunk, result);
        }
        return markHTMLString(parts.toString());
      } else {
        return markHTMLString(output);
      }
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement$1(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, children)}</${tag}>`
    )}`
  );
}
function useConsoleFilter$1() {
  consoleFilterRefs$1++;
  if (!originalConsoleError$1) {
    originalConsoleError$1 = console.error;
    try {
      console.error = filteredConsoleError$1;
    } catch (error2) {
    }
  }
}
function finishUsingConsoleFilter$1() {
  consoleFilterRefs$1--;
}
function filteredConsoleError$1(msg, ...rest) {
  if (consoleFilterRefs$1 > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError$1(msg, ...rest);
}
var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i2 = 0; i2 < str.length; i2++) {
    const ch = str.charCodeAt(i2);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}
var voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
var svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
var STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
var toIdent = (k2) => k2.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
var toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
var kebab = (k2) => k2.toLowerCase() === k2 ? k2 : k2.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
var toStyleString = (obj) => Object.entries(obj).map(([k2, v2]) => `${kebab(k2)}:${v2}`).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString) && typeof value === "object") {
    return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _2, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlot(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
var rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname2 = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname2) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid",
        "@astrojs/vue",
        "@astrojs/svelte"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && typeof Component === "object" && Component["astro:html"];
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  var _a2, _b;
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers: renderers2 } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives(displayName, _props);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers2.filter((r) => r.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error2;
      for (const r of renderers2) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer = r;
            break;
          }
        } catch (e2) {
          error2 ?? (error2 = e2);
        }
      }
      if (!renderer && error2) {
        throw error2;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers2.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname2 = (_a2 = metadata.componentUrl) == null ? void 0 : _a2.split(".").pop();
      renderer = renderers2.filter(
        ({ name }) => name === `@astrojs/${extname2}` || name === extname2
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...AstroErrorData.NoClientOnlyHint,
        message: AstroErrorData.NoClientOnlyHint.message(metadata.displayName),
        hint: AstroErrorData.NoClientOnlyHint.hint(
          probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r) => probableRendererNames.includes(r.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...AstroErrorData.NoMatchingRenderer,
          message: AstroErrorData.NoMatchingRenderer.message(
            metadata.displayName,
            (_b = metadata == null ? void 0 : metadata.componentUrl) == null ? void 0 : _b.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: AstroErrorData.NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r) => "`" + r + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlot(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...AstroErrorData.NoClientEntrypoint,
      message: AstroErrorData.NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroTemplateResult(
      await renderTemplate`<${Tag}${internalSpreadAttributes(props)}${markHTMLString(
        childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
      )}`
    );
    html = "";
    for await (const chunk of iterable) {
      html += chunk;
    }
  }
  if (!hydration) {
    return async function* () {
      if (slotInstructions) {
        yield* slotInstructions;
      }
      if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
        yield html;
      } else {
        yield markHTMLString(html.replace(/\<\/?astro-slot\>/g, ""));
      }
    }();
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    if (slotInstructions) {
      yield* slotInstructions;
    }
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement("astro-island", island, false));
  }
  return renderAll();
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/g;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlot(result, slots == null ? void 0 : slots.default);
  if (children == null) {
    return children;
  }
  return markHTMLString(children);
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component.render({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => stringifyChunk(result, instr)).join("") : "";
  return markHTMLString(hydrationHtml + html);
}
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    return Promise.resolve(Component).then((Unwrapped) => {
      return renderComponent(result, displayName, Unwrapped, props, slots);
    });
  }
  if (isFragmentComponent(Component)) {
    return renderFragmentComponent(result, slots);
  }
  if (isHTMLComponent(Component)) {
    return renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return createAstroComponentInstance(result, displayName, Component, props, slots);
  }
  return renderFrameworkComponent(result, displayName, Component, props, slots);
}
function renderComponentToIterable(result, displayName, Component, props, slots = {}) {
  const renderResult = renderComponent(result, displayName, Component, props, slots);
  if (isAstroComponentInstance(renderResult)) {
    return renderResult.render();
  }
  return renderResult;
}
var uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i2) => JSON.stringify(i2.props) === props && i2.children == children);
};
async function* renderExtraHead(result, base) {
  yield base;
  for (const part of result.extraHead) {
    yield* renderChild(part);
  }
}
function renderAllHeadContent(result) {
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i2) => {
    return renderElement("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement("link", link, false));
  const baseHeadContent = markHTMLString(links.join("\n") + styles.join("\n") + scripts.join("\n"));
  if (result.extraHead.length > 0) {
    return renderExtraHead(result, baseHeadContent);
  } else {
    return baseHeadContent;
  }
}
function createRenderHead(result) {
  result._metadata.hasRenderedHead = true;
  return renderAllHeadContent.bind(null, result);
}
var renderHead = createRenderHead;
async function* maybeRenderHead(result) {
  if (result._metadata.hasRenderedHead) {
    return;
  }
  yield createRenderHead(result)();
}
var __accessCheck$2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$2 = (obj, member, getter) => {
  __accessCheck$2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$2 = (obj, member, value, setter) => {
  __accessCheck$2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var isNodeJS = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
var StreamingCompatibleResponse;
function createResponseClass() {
  var _isStream, _body, _a2;
  StreamingCompatibleResponse = (_a2 = class extends Response {
    constructor(body, init2) {
      let isStream = body instanceof ReadableStream;
      super(isStream ? null : body, init2);
      __privateAdd$2(this, _isStream, void 0);
      __privateAdd$2(this, _body, void 0);
      __privateSet$2(this, _isStream, isStream);
      __privateSet$2(this, _body, body);
    }
    get body() {
      return __privateGet$2(this, _body);
    }
    async text() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let decoder2 = new TextDecoder();
        let body = __privateGet$2(this, _body);
        let out = "";
        for await (let chunk of body) {
          out += decoder2.decode(chunk);
        }
        return out;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let body = __privateGet$2(this, _body);
        let chunks = [];
        let len = 0;
        for await (let chunk of body) {
          chunks.push(chunk);
          len += chunk.length;
        }
        let ab = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
          ab.set(chunk, offset);
          offset += chunk.length;
        }
        return ab;
      }
      return super.arrayBuffer();
    }
  }, _isStream = /* @__PURE__ */ new WeakMap(), _body = /* @__PURE__ */ new WeakMap(), _a2);
  return StreamingCompatibleResponse;
}
var createResponse = isNodeJS ? (body, init2) => {
  if (typeof body === "string" || ArrayBuffer.isView(body)) {
    return new Response(body, init2);
  }
  if (typeof StreamingCompatibleResponse === "undefined") {
    return new (createResponseClass())(body, init2);
  }
  return new StreamingCompatibleResponse(body, init2);
} : (body, init2) => new Response(body, init2);
var needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return needsHeadRenderingSymbol in pageComponent && !!pageComponent[needsHeadRenderingSymbol];
}
async function iterableToHTMLBytes(result, iterable, onDocTypeInjection) {
  const parts = new HTMLParts();
  let i2 = 0;
  for await (const chunk of iterable) {
    if (isHTMLString(chunk)) {
      if (i2 === 0) {
        i2++;
        if (!/<!doctype html/i.test(String(chunk))) {
          parts.append("<!DOCTYPE html>\n", result);
          if (onDocTypeInjection) {
            await onDocTypeInjection(parts);
          }
        }
      }
    }
    parts.append(chunk, result);
  }
  return parts.toArrayBuffer();
}
async function bufferHeadContent(result) {
  const iterator = result.propagators.values();
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init();
    if (isHeadAndContent(returnValue)) {
      result.extraHead.push(returnValue.head);
    }
  }
}
async function renderPage$1(result, componentFactory, props, children, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    const pageProps = { ...props ?? {}, "server:root": true };
    let output;
    try {
      const renderResult = await renderComponent(
        result,
        componentFactory.name,
        componentFactory,
        pageProps,
        null
      );
      if (isAstroComponentInstance(renderResult)) {
        output = renderResult.render();
      } else {
        output = renderResult;
      }
    } catch (e2) {
      if (AstroError.is(e2) && !e2.loc) {
        e2.setLocation({
          file: route == null ? void 0 : route.component
        });
      }
      throw e2;
    }
    const bytes = await iterableToHTMLBytes(result, output, async (parts) => {
      if (nonAstroPageNeedsHeadInjection(componentFactory)) {
        for await (let chunk of maybeRenderHead(result)) {
          parts.append(chunk, result);
        }
      }
    });
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  const factoryReturnValue = await componentFactory(result, props, children);
  const factoryIsHeadAndContent = isHeadAndContent(factoryReturnValue);
  if (isRenderTemplateResult(factoryReturnValue) || factoryIsHeadAndContent) {
    await bufferHeadContent(result);
    const templateResult = factoryIsHeadAndContent ? factoryReturnValue.content : factoryReturnValue;
    let iterable = renderAstroTemplateResult(templateResult);
    let init2 = result.response;
    let headers = new Headers(init2.headers);
    let body;
    if (streaming) {
      body = new ReadableStream({
        start(controller) {
          async function read() {
            let i2 = 0;
            try {
              for await (const chunk of iterable) {
                if (isHTMLString(chunk)) {
                  if (i2 === 0) {
                    if (!/<!doctype html/i.test(String(chunk))) {
                      controller.enqueue(encoder.encode("<!DOCTYPE html>\n"));
                    }
                  }
                }
                const bytes = chunkToByteArray(result, chunk);
                controller.enqueue(bytes);
                i2++;
              }
              controller.close();
            } catch (e2) {
              if (AstroError.is(e2) && !e2.loc) {
                e2.setLocation({
                  file: route == null ? void 0 : route.component
                });
              }
              controller.error(e2);
            }
          }
          read();
        }
      });
    } else {
      body = await iterableToHTMLBytes(result, iterable);
      headers.set("Content-Length", body.byteLength.toString());
    }
    let response = createResponse(body, { ...init2, headers });
    return response;
  }
  if (!(factoryReturnValue instanceof Response)) {
    throw new AstroError({
      ...AstroErrorData.OnlyResponseCanBeReturned,
      message: AstroErrorData.OnlyResponseCanBeReturned.message(
        route == null ? void 0 : route.route,
        typeof factoryReturnValue
      ),
      location: {
        file: route == null ? void 0 : route.component
      }
    });
  }
  return factoryReturnValue;
}
function spreadAttributes(values, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $$1 = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x2, y2) {
  let rgx = new RegExp(`\\x1b\\[${y2}m`, "g");
  let open = `\x1B[${x2}m`, close = `\x1B[${y2}m`;
  return function(txt) {
    if (!$$1.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var red = init(31, 39);
var yellow = init(33, 39);
var cyan = init(36, 39);
var eastasianwidth = { exports: {} };
(function(module) {
  var eaw = {};
  {
    module.exports = eaw;
  }
  eaw.eastAsianWidth = function(character) {
    var x2 = character.charCodeAt(0);
    var y2 = character.length == 2 ? character.charCodeAt(1) : 0;
    var codePoint = x2;
    if (55296 <= x2 && x2 <= 56319 && (56320 <= y2 && y2 <= 57343)) {
      x2 &= 1023;
      y2 &= 1023;
      codePoint = x2 << 10 | y2;
      codePoint += 65536;
    }
    if (12288 == codePoint || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510) {
      return "F";
    }
    if (8361 == codePoint || 65377 <= codePoint && codePoint <= 65470 || 65474 <= codePoint && codePoint <= 65479 || 65482 <= codePoint && codePoint <= 65487 || 65490 <= codePoint && codePoint <= 65495 || 65498 <= codePoint && codePoint <= 65500 || 65512 <= codePoint && codePoint <= 65518) {
      return "H";
    }
    if (4352 <= codePoint && codePoint <= 4447 || 4515 <= codePoint && codePoint <= 4519 || 4602 <= codePoint && codePoint <= 4607 || 9001 <= codePoint && codePoint <= 9002 || 11904 <= codePoint && codePoint <= 11929 || 11931 <= codePoint && codePoint <= 12019 || 12032 <= codePoint && codePoint <= 12245 || 12272 <= codePoint && codePoint <= 12283 || 12289 <= codePoint && codePoint <= 12350 || 12353 <= codePoint && codePoint <= 12438 || 12441 <= codePoint && codePoint <= 12543 || 12549 <= codePoint && codePoint <= 12589 || 12593 <= codePoint && codePoint <= 12686 || 12688 <= codePoint && codePoint <= 12730 || 12736 <= codePoint && codePoint <= 12771 || 12784 <= codePoint && codePoint <= 12830 || 12832 <= codePoint && codePoint <= 12871 || 12880 <= codePoint && codePoint <= 13054 || 13056 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42124 || 42128 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 55216 <= codePoint && codePoint <= 55238 || 55243 <= codePoint && codePoint <= 55291 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65106 || 65108 <= codePoint && codePoint <= 65126 || 65128 <= codePoint && codePoint <= 65131 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127490 || 127504 <= codePoint && codePoint <= 127546 || 127552 <= codePoint && codePoint <= 127560 || 127568 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 194367 || 177984 <= codePoint && codePoint <= 196605 || 196608 <= codePoint && codePoint <= 262141) {
      return "W";
    }
    if (32 <= codePoint && codePoint <= 126 || 162 <= codePoint && codePoint <= 163 || 165 <= codePoint && codePoint <= 166 || 172 == codePoint || 175 == codePoint || 10214 <= codePoint && codePoint <= 10221 || 10629 <= codePoint && codePoint <= 10630) {
      return "Na";
    }
    if (161 == codePoint || 164 == codePoint || 167 <= codePoint && codePoint <= 168 || 170 == codePoint || 173 <= codePoint && codePoint <= 174 || 176 <= codePoint && codePoint <= 180 || 182 <= codePoint && codePoint <= 186 || 188 <= codePoint && codePoint <= 191 || 198 == codePoint || 208 == codePoint || 215 <= codePoint && codePoint <= 216 || 222 <= codePoint && codePoint <= 225 || 230 == codePoint || 232 <= codePoint && codePoint <= 234 || 236 <= codePoint && codePoint <= 237 || 240 == codePoint || 242 <= codePoint && codePoint <= 243 || 247 <= codePoint && codePoint <= 250 || 252 == codePoint || 254 == codePoint || 257 == codePoint || 273 == codePoint || 275 == codePoint || 283 == codePoint || 294 <= codePoint && codePoint <= 295 || 299 == codePoint || 305 <= codePoint && codePoint <= 307 || 312 == codePoint || 319 <= codePoint && codePoint <= 322 || 324 == codePoint || 328 <= codePoint && codePoint <= 331 || 333 == codePoint || 338 <= codePoint && codePoint <= 339 || 358 <= codePoint && codePoint <= 359 || 363 == codePoint || 462 == codePoint || 464 == codePoint || 466 == codePoint || 468 == codePoint || 470 == codePoint || 472 == codePoint || 474 == codePoint || 476 == codePoint || 593 == codePoint || 609 == codePoint || 708 == codePoint || 711 == codePoint || 713 <= codePoint && codePoint <= 715 || 717 == codePoint || 720 == codePoint || 728 <= codePoint && codePoint <= 731 || 733 == codePoint || 735 == codePoint || 768 <= codePoint && codePoint <= 879 || 913 <= codePoint && codePoint <= 929 || 931 <= codePoint && codePoint <= 937 || 945 <= codePoint && codePoint <= 961 || 963 <= codePoint && codePoint <= 969 || 1025 == codePoint || 1040 <= codePoint && codePoint <= 1103 || 1105 == codePoint || 8208 == codePoint || 8211 <= codePoint && codePoint <= 8214 || 8216 <= codePoint && codePoint <= 8217 || 8220 <= codePoint && codePoint <= 8221 || 8224 <= codePoint && codePoint <= 8226 || 8228 <= codePoint && codePoint <= 8231 || 8240 == codePoint || 8242 <= codePoint && codePoint <= 8243 || 8245 == codePoint || 8251 == codePoint || 8254 == codePoint || 8308 == codePoint || 8319 == codePoint || 8321 <= codePoint && codePoint <= 8324 || 8364 == codePoint || 8451 == codePoint || 8453 == codePoint || 8457 == codePoint || 8467 == codePoint || 8470 == codePoint || 8481 <= codePoint && codePoint <= 8482 || 8486 == codePoint || 8491 == codePoint || 8531 <= codePoint && codePoint <= 8532 || 8539 <= codePoint && codePoint <= 8542 || 8544 <= codePoint && codePoint <= 8555 || 8560 <= codePoint && codePoint <= 8569 || 8585 == codePoint || 8592 <= codePoint && codePoint <= 8601 || 8632 <= codePoint && codePoint <= 8633 || 8658 == codePoint || 8660 == codePoint || 8679 == codePoint || 8704 == codePoint || 8706 <= codePoint && codePoint <= 8707 || 8711 <= codePoint && codePoint <= 8712 || 8715 == codePoint || 8719 == codePoint || 8721 == codePoint || 8725 == codePoint || 8730 == codePoint || 8733 <= codePoint && codePoint <= 8736 || 8739 == codePoint || 8741 == codePoint || 8743 <= codePoint && codePoint <= 8748 || 8750 == codePoint || 8756 <= codePoint && codePoint <= 8759 || 8764 <= codePoint && codePoint <= 8765 || 8776 == codePoint || 8780 == codePoint || 8786 == codePoint || 8800 <= codePoint && codePoint <= 8801 || 8804 <= codePoint && codePoint <= 8807 || 8810 <= codePoint && codePoint <= 8811 || 8814 <= codePoint && codePoint <= 8815 || 8834 <= codePoint && codePoint <= 8835 || 8838 <= codePoint && codePoint <= 8839 || 8853 == codePoint || 8857 == codePoint || 8869 == codePoint || 8895 == codePoint || 8978 == codePoint || 9312 <= codePoint && codePoint <= 9449 || 9451 <= codePoint && codePoint <= 9547 || 9552 <= codePoint && codePoint <= 9587 || 9600 <= codePoint && codePoint <= 9615 || 9618 <= codePoint && codePoint <= 9621 || 9632 <= codePoint && codePoint <= 9633 || 9635 <= codePoint && codePoint <= 9641 || 9650 <= codePoint && codePoint <= 9651 || 9654 <= codePoint && codePoint <= 9655 || 9660 <= codePoint && codePoint <= 9661 || 9664 <= codePoint && codePoint <= 9665 || 9670 <= codePoint && codePoint <= 9672 || 9675 == codePoint || 9678 <= codePoint && codePoint <= 9681 || 9698 <= codePoint && codePoint <= 9701 || 9711 == codePoint || 9733 <= codePoint && codePoint <= 9734 || 9737 == codePoint || 9742 <= codePoint && codePoint <= 9743 || 9748 <= codePoint && codePoint <= 9749 || 9756 == codePoint || 9758 == codePoint || 9792 == codePoint || 9794 == codePoint || 9824 <= codePoint && codePoint <= 9825 || 9827 <= codePoint && codePoint <= 9829 || 9831 <= codePoint && codePoint <= 9834 || 9836 <= codePoint && codePoint <= 9837 || 9839 == codePoint || 9886 <= codePoint && codePoint <= 9887 || 9918 <= codePoint && codePoint <= 9919 || 9924 <= codePoint && codePoint <= 9933 || 9935 <= codePoint && codePoint <= 9953 || 9955 == codePoint || 9960 <= codePoint && codePoint <= 9983 || 10045 == codePoint || 10071 == codePoint || 10102 <= codePoint && codePoint <= 10111 || 11093 <= codePoint && codePoint <= 11097 || 12872 <= codePoint && codePoint <= 12879 || 57344 <= codePoint && codePoint <= 63743 || 65024 <= codePoint && codePoint <= 65039 || 65533 == codePoint || 127232 <= codePoint && codePoint <= 127242 || 127248 <= codePoint && codePoint <= 127277 || 127280 <= codePoint && codePoint <= 127337 || 127344 <= codePoint && codePoint <= 127386 || 917760 <= codePoint && codePoint <= 917999 || 983040 <= codePoint && codePoint <= 1048573 || 1048576 <= codePoint && codePoint <= 1114109) {
      return "A";
    }
    return "N";
  };
  eaw.characterLength = function(character) {
    var code = this.eastAsianWidth(character);
    if (code == "F" || code == "W" || code == "A") {
      return 2;
    } else {
      return 1;
    }
  };
  function stringToArray(string) {
    return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  eaw.length = function(string) {
    var characters = stringToArray(string);
    var len = 0;
    for (var i2 = 0; i2 < characters.length; i2++) {
      len = len + this.characterLength(characters[i2]);
    }
    return len;
  };
  eaw.slice = function(text, start2, end) {
    textLen = eaw.length(text);
    start2 = start2 ? start2 : 0;
    end = end ? end : 1;
    if (start2 < 0) {
      start2 = textLen + start2;
    }
    if (end < 0) {
      end = textLen + end;
    }
    var result = "";
    var eawLen = 0;
    var chars = stringToArray(text);
    for (var i2 = 0; i2 < chars.length; i2++) {
      var char = chars[i2];
      var charLen = eaw.length(char);
      if (eawLen >= start2 - (charLen == 2 ? 1 : 0)) {
        if (eawLen + charLen <= end) {
          result += char;
        } else {
          break;
        }
      }
      eawLen += charLen;
    }
    return result;
  };
})(eastasianwidth);
var dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
var levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, type, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    type,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function warn(opts, type, message) {
  return log(opts, "warn", type, message);
}
function error(opts, type, message) {
  return log(opts, "error", type, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
if (typeof process !== "undefined") {
  if (process.argv.includes("--verbose"))
    ;
  else if (process.argv.includes("--silent"))
    ;
  else
    ;
}
var VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsInvalidRouteParam,
      message: AstroErrorData.GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  logging,
  route
}) {
  if (ssr && mod.getStaticPaths) {
    warn(logging, "getStaticPaths", 'getStaticPaths() is ignored when "output: server" is set.');
  }
  if (!ssr && !mod.getStaticPaths) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logging, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...AstroErrorData.InvalidGetStaticPathsReturn,
      message: AstroErrorData.InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...AstroErrorData.GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    if (typeof pathObject.params !== "object") {
      throw new AstroError({
        ...AstroErrorData.InvalidGetStaticPathParam,
        message: AstroErrorData.InvalidGetStaticPathParam.message(typeof pathObject.params),
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}
function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i2) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i2 + 1] ? decodeURIComponent(match[i2 + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i2 + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params, routeComponent) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, routeComponent);
    const [key, value] = next;
    acc[key] = value == null ? void 0 : value.toString();
    return acc;
  }, {});
  return JSON.stringify(validatedParams, Object.keys(params).sort());
}
var SCRIPT_EXTENSIONS = /* @__PURE__ */ new Set([".js", ".ts"]);
var scriptRe = new RegExp(
  `\\.(${Array.from(SCRIPT_EXTENSIONS).map((s2) => s2.slice(1)).join("|")})($|\\?)`
);
var isScriptRequest = (request) => scriptRe.test(request);
var STYLE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".css",
  ".pcss",
  ".postcss",
  ".scss",
  ".sass",
  ".styl",
  ".stylus",
  ".less"
]);
var cssRe = new RegExp(
  `\\.(${Array.from(STYLE_EXTENSIONS).map((s2) => s2.slice(1)).join("|")})($|\\?)`
);
var isCSSRequest = (request) => cssRe.test(request);
var __accessCheck$1 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$1 = (obj, member, getter) => {
  __accessCheck$1(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$1 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$1 = (obj, member, value, setter) => {
  __accessCheck$1(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _result;
var _slots;
var _loggingOpts;
var clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(name) {
  return function _onlyAvailableInSSR() {
    switch (name) {
      case "Astro.redirect":
        throw new AstroError(AstroErrorData.StaticRedirectNotAvailable);
    }
  };
}
function getFunctionExpression(slot) {
  var _a2;
  if (!slot)
    return;
  if (((_a2 = slot.expressions) == null ? void 0 : _a2.length) !== 1)
    return;
  return slot.expressions[0];
}
var Slots = class {
  constructor(result, slots, logging) {
    __privateAdd$1(this, _result, void 0);
    __privateAdd$1(this, _slots, void 0);
    __privateAdd$1(this, _loggingOpts, void 0);
    __privateSet$1(this, _result, result);
    __privateSet$1(this, _slots, slots);
    __privateSet$1(this, _loggingOpts, logging);
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...AstroErrorData.ReservedSlotName,
            message: AstroErrorData.ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!__privateGet$1(this, _slots))
      return false;
    return Boolean(__privateGet$1(this, _slots)[name]);
  }
  async render(name, args = []) {
    if (!__privateGet$1(this, _slots) || !this.has(name))
      return;
    if (!Array.isArray(args)) {
      warn(
        __privateGet$1(this, _loggingOpts),
        "Astro.slots.render",
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = __privateGet$1(this, _slots)[name];
      const component = typeof slotValue === "function" ? await slotValue() : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = expression(...args);
        return await renderSlot(__privateGet$1(this, _result), slot).then(
          (res) => res != null ? String(res) : res
        );
      }
      if (typeof component === "function") {
        return await renderJSX(__privateGet$1(this, _result), component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlot(__privateGet$1(this, _result), __privateGet$1(this, _slots)[name]);
    const outHTML = stringifyChunk(__privateGet$1(this, _result), content);
    return outHTML;
  }
};
_result = /* @__PURE__ */ new WeakMap();
_slots = /* @__PURE__ */ new WeakMap();
_loggingOpts = /* @__PURE__ */ new WeakMap();
var renderMarkdown = null;
function createResult(args) {
  const { markdown, params, pathname, renderers: renderers2, request, resolve: resolve2 } = args;
  const url = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  let cookies = void 0;
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    propagation: args.propagation ?? /* @__PURE__ */ new Map(),
    propagators: /* @__PURE__ */ new Map(),
    extraHead: [],
    cookies,
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol$1 in request)) {
            if (args.adapterName) {
              throw new AstroError({
                ...AstroErrorData.ClientAddressNotAvailable,
                message: AstroErrorData.ClientAddressNotAvailable.message(args.adapterName)
              });
            } else {
              throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
            }
          }
          return Reflect.get(request, clientAddressSymbol$1);
        },
        get cookies() {
          if (cookies) {
            return cookies;
          }
          cookies = new AstroCookies(request);
          result.cookies = cookies;
          return cookies;
        },
        params,
        props,
        request,
        url,
        redirect: args.ssr ? (path, status) => {
          return new Response(null, {
            status: status || 302,
            headers: {
              Location: path
            }
          });
        } : onlyAvailableInSSR("Astro.redirect"),
        resolve(path) {
          let extra = `This can be replaced with a dynamic import like so: await import("${path}")`;
          if (isCSSRequest(path)) {
            extra = `It looks like you are resolving styles. If you are adding a link tag, replace with this:
---
import "${path}";
---
`;
          } else if (isScriptRequest(path)) {
            extra = `It looks like you are resolving scripts. If you are adding a script tag, replace with this:

<script type="module" src={(await import("${path}?url")).default}><\/script>

or consider make it a module like so:

<script>
	import MyModule from "${path}";
<\/script>
`;
          }
          warn(
            args.logging,
            `deprecation`,
            `${bold(
              "Astro.resolve()"
            )} is deprecated. We see that you are trying to resolve ${path}.
${extra}`
          );
          return "";
        },
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "canonicalURL", {
        get: function() {
          warn(
            args.logging,
            "deprecation",
            `${bold("Astro.canonicalURL")} is deprecated! Use \`Astro.url\` instead.
Example:

---
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---
`
          );
          return new URL(this.request.url.pathname, this.site);
        }
      });
      Object.defineProperty(Astro, "__renderMarkdown", {
        enumerable: false,
        writable: false,
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, { ...markdown, ...opts ?? {} });
          return code;
        }
      });
      return Astro;
    },
    resolve: resolve2,
    _metadata: {
      renderers: renderers2,
      pathname,
      hasHydrationScript: false,
      hasRenderedHead: false,
      hasDirectives: /* @__PURE__ */ new Set()
    },
    response
  };
  return result;
}
function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new Error(
        `[paginate()] page number param \`${paramName}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`
      );
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start2 = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start2 + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start2, end),
            start: start2,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: {
              current: routeMatch.generate({ ...params }),
              next: pageNum === lastPage ? void 0 : routeMatch.generate({ ...params, page: String(pageNum + 1) }),
              prev: pageNum === 1 ? void 0 : routeMatch.generate({
                ...params,
                page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
              })
            }
          }
        }
      };
    });
    return result;
  };
}
async function callGetStaticPaths({
  isValidate,
  logging,
  mod,
  route,
  ssr
}) {
  validateDynamicRouteModule(mod, { ssr, logging, route });
  if (ssr) {
    return { staticPaths: Object.assign([], { keyed: /* @__PURE__ */ new Map() }) };
  }
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  let staticPaths = [];
  staticPaths = await mod.getStaticPaths({
    paginate: generatePaginateFunction(route),
    rss() {
      throw new AstroError(AstroErrorData.GetStaticPathsRemovedRSSHelper);
    }
  });
  if (Array.isArray(staticPaths)) {
    staticPaths = staticPaths.flat();
  }
  if (isValidate) {
    validateGetStaticPathsResult(staticPaths, logging, route);
  }
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route.component);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  return {
    staticPaths: keyedStaticPaths
  };
}
var RouteCache = class {
  constructor(logging, mode = "production") {
    this.cache = {};
    this.logging = logging;
    this.mode = mode;
  }
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    if (this.mode === "production" && this.cache[route.component]) {
      warn(
        this.logging,
        "routeCache",
        `Internal Warning: route cache overwritten. (${route.component})`
      );
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
};
function findPathItemByKey(staticPaths, params, route) {
  const paramsKey = stringifyParams(params, route.component);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
}
var GetParamsAndPropsError = /* @__PURE__ */ ((GetParamsAndPropsError2) => {
  GetParamsAndPropsError2[GetParamsAndPropsError2["NoMatchingStaticPath"] = 0] = "NoMatchingStaticPath";
  return GetParamsAndPropsError2;
})(GetParamsAndPropsError || {});
async function getParamsAndProps(opts) {
  const { logging, mod, route, routeCache, pathname, ssr } = opts;
  let params = {};
  let pageProps;
  if (route && !route.pathname) {
    if (route.params.length) {
      const paramsMatch = route.pattern.exec(pathname);
      if (paramsMatch) {
        params = getParams(route.params)(paramsMatch);
      }
    }
    let routeCacheEntry = routeCache.get(route);
    if (!routeCacheEntry) {
      routeCacheEntry = await callGetStaticPaths({ mod, route, isValidate: true, logging, ssr });
      routeCache.set(route, routeCacheEntry);
    }
    const matchedStaticPath = findPathItemByKey(routeCacheEntry.staticPaths, params, route);
    if (!matchedStaticPath && !ssr) {
      return 0;
    }
    pageProps = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? { ...matchedStaticPath.props } : {};
  } else {
    pageProps = {};
  }
  return [params, pageProps];
}
async function renderPage(mod, ctx, env) {
  var _a2, _b;
  const paramsAndPropsRes = await getParamsAndProps({
    logging: env.logging,
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    ssr: env.ssr
  });
  if (paramsAndPropsRes === 0) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(ctx.pathname),
      hint: ((_a2 = ctx.route) == null ? void 0 : _a2.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([(_b = ctx.route) == null ? void 0 : _b.component]) : ""
    });
  }
  const [params, pageProps] = paramsAndPropsRes;
  const Component = mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName: env.adapterName,
    links: ctx.links,
    styles: ctx.styles,
    logging: env.logging,
    markdown: env.markdown,
    mode: env.mode,
    origin: ctx.origin,
    params,
    props: pageProps,
    pathname: ctx.pathname,
    propagation: ctx.propagation,
    resolve: env.resolve,
    renderers: env.renderers,
    request: ctx.request,
    site: env.site,
    scripts: ctx.scripts,
    ssr: env.ssr,
    status: ctx.status ?? 200
  });
  if (typeof mod.components === "object") {
    Object.assign(pageProps, { components: mod.components });
  }
  if (typeof mod.default === "function" && mod.default.name.startsWith("MDX")) {
    Object.assign(pageProps, {
      components: Object.assign((pageProps == null ? void 0 : pageProps.components) ?? {}, { Fragment })
    });
  }
  const response = await renderPage$1(
    result,
    Component,
    pageProps,
    null,
    env.streaming,
    ctx.route
  );
  if (result.cookies) {
    attachToResponse(response, result.cookies);
  }
  return response;
}
var clientAddressSymbol = Symbol.for("astro.clientAddress");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
  return {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol in request)) {
        if (adapterName) {
          throw new AstroError({
            ...AstroErrorData.ClientAddressNotAvailable,
            message: AstroErrorData.ClientAddressNotAvailable.message(adapterName)
          });
        } else {
          throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
        }
      }
      return Reflect.get(request, clientAddressSymbol);
    }
  };
}
async function call(mod, env, ctx) {
  var _a2, _b;
  const paramsAndPropsResp = await getParamsAndProps({
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    logging: env.logging,
    ssr: env.ssr
  });
  if (paramsAndPropsResp === GetParamsAndPropsError.NoMatchingStaticPath) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(ctx.pathname),
      hint: ((_a2 = ctx.route) == null ? void 0 : _a2.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([(_b = ctx.route) == null ? void 0 : _b.component]) : ""
    });
  }
  const [params, props] = paramsAndPropsResp;
  const context = createAPIContext({
    request: ctx.request,
    params,
    props,
    site: env.site,
    adapterName: env.adapterName
  });
  const response = await renderEndpoint(mod, context, env.ssr);
  if (response instanceof Response) {
    attachToResponse(response, context.cookies);
    return {
      type: "response",
      response
    };
  }
  return {
    type: "simple",
    body: response.body,
    encoding: response.encoding,
    cookies: context.cookies
  };
}
var lastMessage;
var lastMessageCount = 1;
var consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    function getPrefix() {
      let prefix = "";
      let type = event.type;
      if (type) {
        prefix += dim(dateTimeFormat.format(new Date()) + " ");
        if (event.level === "info") {
          type = bold(cyan(`[${type}]`));
        } else if (event.level === "warn") {
          type = bold(yellow(`[${type}]`));
        } else if (event.level === "error") {
          type = bold(red(`[${type}]`));
        }
        prefix += `${type} `;
      }
      return reset(prefix);
    }
    let message = event.message;
    if (message === lastMessage) {
      lastMessageCount++;
      message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
    } else {
      lastMessage = message;
      lastMessageCount = 1;
    }
    const outMessage = getPrefix() + message;
    dest(outMessage);
    return true;
  }
};
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map(trimSlashes).join("/");
}
function createRenderContext(options) {
  const request = options.request;
  const url = new URL(request.url);
  const origin = options.origin ?? url.origin;
  const pathname = options.pathname ?? url.pathname;
  return {
    ...options,
    origin,
    pathname,
    url
  };
}
function createEnvironment(options) {
  return options;
}
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
  }
}
function normalizeStringPosix(path, allowAboveRoot) {
  var res = "";
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i2 = 0; i2 <= path.length; ++i2) {
    if (i2 < path.length)
      code = path.charCodeAt(i2);
    else if (code === 47)
      break;
    else
      code = 47;
    if (code === 47) {
      if (lastSlash === i2 - 1 || dots === 1)
        ;
      else if (lastSlash !== i2 - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = "";
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
              }
              lastSlash = i2;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += "/..";
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += "/" + path.slice(lastSlash + 1, i2);
        else
          res = path.slice(lastSlash + 1, i2);
        lastSegmentLength = i2 - lastSlash - 1;
      }
      lastSlash = i2;
      dots = 0;
    } else if (code === 46 && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}
var posix = {
  resolve: function resolve() {
    var resolvedPath = "";
    var resolvedAbsolute = false;
    var cwd;
    for (var i2 = arguments.length - 1; i2 >= -1 && !resolvedAbsolute; i2--) {
      var path;
      if (i2 >= 0)
        path = arguments[i2];
      else {
        if (cwd === void 0)
          cwd = process.cwd();
        path = cwd;
      }
      assertPath(path);
      if (path.length === 0) {
        continue;
      }
      resolvedPath = path + "/" + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47;
    }
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return "/" + resolvedPath;
      else
        return "/";
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return ".";
    }
  },
  normalize: function normalize(path) {
    assertPath(path);
    if (path.length === 0)
      return ".";
    var isAbsolute2 = path.charCodeAt(0) === 47;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
    path = normalizeStringPosix(path, !isAbsolute2);
    if (path.length === 0 && !isAbsolute2)
      path = ".";
    if (path.length > 0 && trailingSeparator)
      path += "/";
    if (isAbsolute2)
      return "/" + path;
    return path;
  },
  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47;
  },
  join: function join() {
    if (arguments.length === 0)
      return ".";
    var joined;
    for (var i2 = 0; i2 < arguments.length; ++i2) {
      var arg = arguments[i2];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === void 0)
          joined = arg;
        else
          joined += "/" + arg;
      }
    }
    if (joined === void 0)
      return ".";
    return posix.normalize(joined);
  },
  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to)
      return "";
    from = posix.resolve(from);
    to = posix.resolve(to);
    if (from === to)
      return "";
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i2 = 0;
    for (; i2 <= length; ++i2) {
      if (i2 === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i2) === 47) {
            return to.slice(toStart + i2 + 1);
          } else if (i2 === 0) {
            return to.slice(toStart + i2);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i2) === 47) {
            lastCommonSep = i2;
          } else if (i2 === 0) {
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i2);
      var toCode = to.charCodeAt(toStart + i2);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47)
        lastCommonSep = i2;
    }
    var out = "";
    for (i2 = fromStart + lastCommonSep + 1; i2 <= fromEnd; ++i2) {
      if (i2 === fromEnd || from.charCodeAt(i2) === 47) {
        if (out.length === 0)
          out += "..";
        else
          out += "/..";
      }
    }
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47)
        ++toStart;
      return to.slice(toStart);
    }
  },
  _makeLong: function _makeLong(path) {
    return path;
  },
  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0)
      return ".";
    var code = path.charCodeAt(0);
    var hasRoot = code === 47;
    var end = -1;
    var matchedSlash = true;
    for (var i2 = path.length - 1; i2 >= 1; --i2) {
      code = path.charCodeAt(i2);
      if (code === 47) {
        if (!matchedSlash) {
          end = i2;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }
    if (end === -1)
      return hasRoot ? "/" : ".";
    if (hasRoot && end === 1)
      return "//";
    return path.slice(0, end);
  },
  basename: function basename(path, ext) {
    if (ext !== void 0 && typeof ext !== "string")
      throw new TypeError('"ext" argument must be a string');
    assertPath(path);
    var start2 = 0;
    var end = -1;
    var matchedSlash = true;
    var i2;
    if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path)
        return "";
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i2 = path.length - 1; i2 >= 0; --i2) {
        var code = path.charCodeAt(i2);
        if (code === 47) {
          if (!matchedSlash) {
            start2 = i2 + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i2 + 1;
          }
          if (extIdx >= 0) {
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i2;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start2 === end)
        end = firstNonSlashEnd;
      else if (end === -1)
        end = path.length;
      return path.slice(start2, end);
    } else {
      for (i2 = path.length - 1; i2 >= 0; --i2) {
        if (path.charCodeAt(i2) === 47) {
          if (!matchedSlash) {
            start2 = i2 + 1;
            break;
          }
        } else if (end === -1) {
          matchedSlash = false;
          end = i2 + 1;
        }
      }
      if (end === -1)
        return "";
      return path.slice(start2, end);
    }
  },
  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var preDotState = 0;
    for (var i2 = path.length - 1; i2 >= 0; --i2) {
      var code = path.charCodeAt(i2);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i2 + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i2 + 1;
      }
      if (code === 46) {
        if (startDot === -1)
          startDot = i2;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path.slice(startDot, end);
  },
  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format("/", pathObject);
  },
  parse: function parse(path) {
    assertPath(path);
    var ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path.length === 0)
      return ret;
    var code = path.charCodeAt(0);
    var isAbsolute2 = code === 47;
    var start2;
    if (isAbsolute2) {
      ret.root = "/";
      start2 = 1;
    } else {
      start2 = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i2 = path.length - 1;
    var preDotState = 0;
    for (; i2 >= start2; --i2) {
      code = path.charCodeAt(i2);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i2 + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i2 + 1;
      }
      if (code === 46) {
        if (startDot === -1)
          startDot = i2;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute2)
          ret.base = ret.name = path.slice(1, end);
        else
          ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute2) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }
    if (startPart > 0)
      ret.dir = path.slice(0, startPart - 1);
    else if (isAbsolute2)
      ret.dir = "/";
    return ret;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
posix.posix = posix;
var pathBrowserify = posix;
function getRootPath(base) {
  return appendForwardSlash(new URL(base || "/", "http://localhost/").pathname);
}
function joinToRoot(href, base) {
  return pathBrowserify.posix.join(getRootPath(base), href);
}
function createLinkStylesheetElement(href, base) {
  return {
    props: {
      rel: "stylesheet",
      href: joinToRoot(href, base)
    },
    children: ""
  };
}
function createLinkStylesheetElementSet(hrefs, base) {
  return new Set(hrefs.map((href) => createLinkStylesheetElement(href, base)));
}
function createModuleScriptElement(script, base) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, site) {
  return {
    props: {
      type: "module",
      src: joinToRoot(src, site)
    },
    children: ""
  };
}
function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(pathname));
}
function matchAssets(route, assets) {
  for (const asset of assets) {
    if (!asset.endsWith(".html"))
      continue;
    if (route.pattern.test(asset)) {
      return asset;
    }
    if (route.pattern.test(asset.replace(/index\.html$/, ""))) {
      return asset;
    }
  }
}
function lexer(str) {
  var tokens = [];
  var i2 = 0;
  while (i2 < str.length) {
    var char = str[i2];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i2, value: str[i2++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i2++, value: str[i2++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i2, value: str[i2++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i2, value: str[i2++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j2 = i2 + 1;
      while (j2 < str.length) {
        var code = str.charCodeAt(j2);
        if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
          name += str[j2++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i2));
      tokens.push({ type: "NAME", index: i2, value: name });
      i2 = j2;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j2 = i2 + 1;
      if (str[j2] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j2));
      }
      while (j2 < str.length) {
        if (str[j2] === "\\") {
          pattern += str[j2++] + str[j2++];
          continue;
        }
        if (str[j2] === ")") {
          count--;
          if (count === 0) {
            j2++;
            break;
          }
        } else if (str[j2] === "(") {
          count++;
          if (str[j2 + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j2));
          }
        }
        pattern += str[j2++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i2));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i2));
      tokens.push({ type: "PATTERN", index: i2, value: pattern });
      i2 = j2;
      continue;
    }
    tokens.push({ type: "CHAR", index: i2, value: str[i2++] });
  }
  tokens.push({ type: "END", index: i2, value: "" });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a2 = options.prefixes, prefixes = _a2 === void 0 ? "./" : _a2;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i2 = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i2 < tokens.length && tokens[i2].type === type)
      return tokens[i2++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a3 = tokens[i2], nextType = _a3.type, index = _a3.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i2 < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse2(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a2 = options.encode, encode2 = _a2 === void 0 ? function(x2) {
    return x2;
  } : _a2, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path = "";
    for (var i2 = 0; i2 < tokens.length; i2++) {
      var token = tokens[i2];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j2 = 0; j2 < value.length; j2++) {
          var segment = encode2(value[j2], token);
          if (validate && !matches[i2].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode2(String(value), token);
        if (validate && !matches[i2].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  return {
    ...serializedManifest,
    assets,
    routes
  };
}
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _env;
var _manifest$1;
var _manifestData;
var _routeDataToRouteInfo;
var _encoder;
var _logging;
var _base;
var _baseWithoutTrailingSlash;
var _renderPage;
var renderPage_fn;
var _callEndpoint;
var callEndpoint_fn;
var App = class {
  constructor(manifest, streaming = true) {
    __privateAdd(this, _renderPage);
    __privateAdd(this, _callEndpoint);
    __privateAdd(this, _env, void 0);
    __privateAdd(this, _manifest$1, void 0);
    __privateAdd(this, _manifestData, void 0);
    __privateAdd(this, _routeDataToRouteInfo, void 0);
    __privateAdd(this, _encoder, new TextEncoder());
    __privateAdd(this, _logging, {
      dest: consoleLogDestination,
      level: "info"
    });
    __privateAdd(this, _base, void 0);
    __privateAdd(this, _baseWithoutTrailingSlash, void 0);
    __privateSet(this, _manifest$1, manifest);
    __privateSet(this, _manifestData, {
      routes: manifest.routes.map((route) => route.routeData)
    });
    __privateSet(this, _routeDataToRouteInfo, new Map(manifest.routes.map((route) => [route.routeData, route])));
    __privateSet(this, _env, createEnvironment({
      adapterName: manifest.adapterName,
      logging: __privateGet(this, _logging),
      markdown: manifest.markdown,
      mode: "production",
      renderers: manifest.renderers,
      async resolve(specifier) {
        if (!(specifier in manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return prependForwardSlash(joinPaths(manifest.base, bundlePath));
          }
        }
      },
      routeCache: new RouteCache(__privateGet(this, _logging)),
      site: __privateGet(this, _manifest$1).site,
      ssr: true,
      streaming
    }));
    __privateSet(this, _base, __privateGet(this, _manifest$1).base || "/");
    __privateSet(this, _baseWithoutTrailingSlash, removeTrailingForwardSlash(__privateGet(this, _base)));
  }
  removeBase(pathname) {
    if (pathname.startsWith(__privateGet(this, _base))) {
      return pathname.slice(__privateGet(this, _baseWithoutTrailingSlash).length + 1);
    }
    return pathname;
  }
  match(request, { matchNotFound = false } = {}) {
    const url = new URL(request.url);
    if (__privateGet(this, _manifest$1).assets.has(url.pathname)) {
      return void 0;
    }
    let pathname = "/" + this.removeBase(url.pathname);
    let routeData = matchRoute(pathname, __privateGet(this, _manifestData));
    if (routeData) {
      const asset = matchAssets(routeData, __privateGet(this, _manifest$1).assets);
      if (asset)
        return void 0;
      return routeData;
    } else if (matchNotFound) {
      return matchRoute("/404", __privateGet(this, _manifestData));
    } else {
      return void 0;
    }
  }
  async render(request, routeData) {
    let defaultStatus = 200;
    if (!routeData) {
      routeData = this.match(request);
      if (!routeData) {
        defaultStatus = 404;
        routeData = this.match(request, { matchNotFound: true });
      }
      if (!routeData) {
        return new Response(null, {
          status: 404,
          statusText: "Not found"
        });
      }
    }
    if (routeData.route === "/404") {
      defaultStatus = 404;
    }
    let mod = __privateGet(this, _manifest$1).pageMap.get(routeData.component);
    if (routeData.type === "page") {
      let response = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, routeData, mod, defaultStatus);
      if (response.status === 500) {
        const fiveHundredRouteData = matchRoute("/500", __privateGet(this, _manifestData));
        if (fiveHundredRouteData) {
          mod = __privateGet(this, _manifest$1).pageMap.get(fiveHundredRouteData.component);
          try {
            let fiveHundredResponse = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, fiveHundredRouteData, mod, 500);
            return fiveHundredResponse;
          } catch {
          }
        }
      }
      return response;
    } else if (routeData.type === "endpoint") {
      return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, request, routeData, mod, defaultStatus);
    } else {
      throw new Error(`Unsupported route type [${routeData.type}].`);
    }
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
};
_env = /* @__PURE__ */ new WeakMap();
_manifest$1 = /* @__PURE__ */ new WeakMap();
_manifestData = /* @__PURE__ */ new WeakMap();
_routeDataToRouteInfo = /* @__PURE__ */ new WeakMap();
_encoder = /* @__PURE__ */ new WeakMap();
_logging = /* @__PURE__ */ new WeakMap();
_base = /* @__PURE__ */ new WeakMap();
_baseWithoutTrailingSlash = /* @__PURE__ */ new WeakMap();
_renderPage = /* @__PURE__ */ new WeakSet();
renderPage_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const pathname = "/" + this.removeBase(url.pathname);
  const info = __privateGet(this, _routeDataToRouteInfo).get(routeData);
  const links = createLinkStylesheetElementSet(info.links);
  let scripts = /* @__PURE__ */ new Set();
  for (const script of info.scripts) {
    if ("stage" in script) {
      if (script.stage === "head-inline") {
        scripts.add({
          props: {},
          children: script.children
        });
      }
    } else {
      scripts.add(createModuleScriptElement(script));
    }
  }
  try {
    const ctx = createRenderContext({
      request,
      origin: url.origin,
      pathname,
      scripts,
      links,
      route: routeData,
      status
    });
    const response = await renderPage(mod, ctx, __privateGet(this, _env));
    return response;
  } catch (err) {
    error(__privateGet(this, _logging), "ssr", err.stack || err.message || String(err));
    return new Response(null, {
      status: 500,
      statusText: "Internal server error"
    });
  }
};
_callEndpoint = /* @__PURE__ */ new WeakSet();
callEndpoint_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const pathname = "/" + this.removeBase(url.pathname);
  const handler = mod;
  const ctx = createRenderContext({
    request,
    origin: url.origin,
    pathname,
    route: routeData,
    status
  });
  const result = await call(handler, __privateGet(this, _env), ctx);
  if (result.type === "response") {
    if (result.response.headers.get("X-Astro-Response") === "Not-Found") {
      const fourOhFourRequest = new Request(new URL("/404", request.url));
      const fourOhFourRouteData = this.match(fourOhFourRequest);
      if (fourOhFourRouteData) {
        return this.render(fourOhFourRequest, fourOhFourRouteData);
      }
    }
    return result.response;
  } else {
    const body = result.body;
    const headers = new Headers();
    const mimeType = mime.getType(url.pathname);
    if (mimeType) {
      headers.set("Content-Type", `${mimeType};charset=utf-8`);
    } else {
      headers.set("Content-Type", "text/plain;charset=utf-8");
    }
    const bytes = __privateGet(this, _encoder).encode(body);
    headers.set("Content-Length", bytes.byteLength.toString());
    const response = new Response(bytes, {
      status: 200,
      headers
    });
    attachToResponse(response, result.cookies);
    return response;
  }
};
var _server = void 0;
var _startPromise = void 0;
function start$1(manifest, options) {
  if (options.start === false) {
    return;
  }
  const clientRoot = new URL("../client/", import.meta.url);
  const app = new App(manifest);
  const handler = async (request, connInfo) => {
    var _a2;
    if (app.match(request)) {
      let ip = (_a2 = connInfo == null ? void 0 : connInfo.remoteAddr) == null ? void 0 : _a2.hostname;
      Reflect.set(request, Symbol.for("astro.clientAddress"), ip);
      return await app.render(request);
    }
    const url = new URL(request.url);
    const localPath = new URL("." + url.pathname, clientRoot);
    return fetch(localPath.toString());
  };
  const port = options.port ?? 8085;
  _server = new Server({
    port,
    hostname: options.hostname ?? "0.0.0.0",
    handler
  });
  _startPromise = Promise.resolve(_server.listenAndServe());
  console.error(`Server running on port ${port}`);
}
function createExports(manifest, options) {
  const app = new App(manifest);
  return {
    async stop() {
      if (_server) {
        _server.close();
        _server = void 0;
      }
      await Promise.resolve(_startPromise);
    },
    running() {
      return _server !== void 0;
    },
    async start() {
      return start$1(manifest, options);
    },
    async handle(request) {
      return app.render(request);
    }
  };
}
var adapter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createExports,
  start: start$1
}, Symbol.toStringTag, { value: "Module" }));
var n$1;
var l$1;
var u$1;
var t;
var o$1;
var f$1 = {};
var e = [];
var c$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function a$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function h$1(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$1.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$1(l2, f2, t2, o2, null);
}
function v$1(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$1 : r };
  return null == r && null != l$1.vnode && l$1.vnode(f2), f2;
}
function p$1(n2) {
  return n2.children;
}
function d$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function _$1(n2, l2) {
  if (null == l2)
    return n2.__ ? _$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _$1(n2) : null;
}
function k$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$1(n2);
  }
}
function b$1(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g$1.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || setTimeout)(g$1);
}
function g$1() {
  for (var n2; g$1.__r = t.length; )
    n2 = t.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r = l2.__P) && (u2 = [], (i2 = s$1({}, t2)).__v = t2.__v + 1, j$1(r, t2, i2, l2.__n, void 0 !== r.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _$1(t2) : o2, t2.__h), z(u2, t2), t2.__e != o2 && k$1(t2)));
    });
}
function w$1(n2, l2, u2, i2, t2, o2, r, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x2 = i2 && i2.__k || e, C2 = x2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v$1(null, k2, null, null, k2) : Array.isArray(k2) ? v$1(p$1, { children: k2 }, null, null, null) : k2.__b > 0 ? v$1(k2.type, k2.props, k2.key, null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x2[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x2[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x2[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x2[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$1(n2, k2, d2 = d2 || f$1, t2, o2, r, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m$1(k2, s2, n2) : s2 = A$1(n2, k2, d2, x2, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$1(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x2[h2] && ("function" == typeof u2.type && null != x2[h2].__e && x2[h2].__e == u2.__d && (u2.__d = _$1(i2, h2 + 1)), N(x2[h2], x2[h2]));
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M(w2[h2], w2[++h2], w2[++h2]);
}
function m$1(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m$1(i2, l2, u2) : A$1(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function A$1(n2, l2, u2, i2, t2, o2) {
  var r, f2, e2;
  if (void 0 !== l2.__d)
    r = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r = o2;
      }
  return void 0 !== r ? r : t2.nextSibling;
}
function C$1(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H(n2, o2, l2[o2], u2[o2], i2);
}
function $(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c$1.test(l2) ? u2 : u2 + "px";
}
function H(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T : I, o2) : n2.removeEventListener(l2, o2 ? T : I, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null != u2 && (false !== u2 || "a" === l2[0] && "r" === l2[1]) ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I(n2) {
  this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
}
function j$1(n2, u2, i2, t2, o2, r, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x2, A2, C2, $2, H2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r = [e2]), (a2 = l$1.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof H2) {
        if (g2 = u2.props, m2 = (a2 = H2.contextType) && t2[a2.__c], x2 = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u2.__c = h2 = new H2(g2, x2) : (u2.__c = h2 = new d$1(g2, x2), h2.constructor = H2, h2.render = O$1), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s$1({}, h2.__s)), s$1(h2.__s, H2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == H2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == H2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x2) || u2.__v === i2.__v) {
            h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x2), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x2, h2.props = g2, h2.__v = u2, h2.__P = n2, A2 = l$1.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
          h2.state = h2.__s, h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context);
        else
          do {
            h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++C2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s$1(s$1({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), $2 = null != a2 && a2.type === p$1 && null == a2.key ? a2.props.children : a2, w$1(n2, Array.isArray($2) ? $2 : [$2], u2, i2, t2, o2, r, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, o2, r, f2, c2);
    (a2 = l$1.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r) && (u2.__e = e2, u2.__h = !!c2, r[r.indexOf(e2)] = null), l$1.__e(n3, u2, i2);
  }
}
function z(n2, u2) {
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function L(l2, u2, i2, t2, o2, r, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r) {
    for (; k2 < r.length; k2++)
      if ((s2 = r[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r = r && n$1.call(l2.childNodes), h2 = (y2 = i2.props || f$1).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$1(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$1(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r, e2, r ? r[0] : i2.__k && _$1(i2, 0), c2), null != r)
      for (k2 = r.length; k2--; )
        null != r[k2] && a$1(r[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
function M(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, i2);
  }
}
function N(n2, u2, i2) {
  var t2, o2;
  if (l$1.unmount && l$1.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N(t2[o2], u2, "function" != typeof n2.type);
  i2 || null == n2.__e || a$1(n2.__e), n2.__e = n2.__d = void 0;
}
function O$1(n2, l2, u2) {
  return this.constructor(n2, u2);
}
n$1 = e.slice, l$1 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, d$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$1({}, this.state), "function" == typeof n2 && (n2 = n2(s$1({}, u2), this.props)), n2 && s$1(u2, n2), null != n2 && this.__v && (l2 && this.__h.push(l2), b$1(this));
}, d$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$1(this));
}, d$1.prototype.render = p$1, t = [], g$1.__r = 0;
var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
var o = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
var i = /[\s\n\\/='"\0<>]/;
var l = /^xlink:?./;
var a = /["&<]/;
function s(e2) {
  if (false === a.test(e2 += ""))
    return e2;
  for (var t2 = 0, r = 0, n2 = "", o2 = ""; r < e2.length; r++) {
    switch (e2.charCodeAt(r)) {
      case 34:
        o2 = "&quot;";
        break;
      case 38:
        o2 = "&amp;";
        break;
      case 60:
        o2 = "&lt;";
        break;
      default:
        continue;
    }
    r !== t2 && (n2 += e2.slice(t2, r)), n2 += o2, t2 = r + 1;
  }
  return r !== t2 && (n2 += e2.slice(t2, r)), n2;
}
var f = function(e2, t2) {
  return String(e2).replace(/(\n+)/g, "$1" + (t2 || "	"));
};
var u = function(e2, t2, r) {
  return String(e2).length > (t2 || 40) || !r && -1 !== String(e2).indexOf("\n") || -1 !== String(e2).indexOf("<");
};
var c = {};
var _ = /([A-Z])/g;
function p(e2) {
  var t2 = "";
  for (var r in e2) {
    var o2 = e2[r];
    null != o2 && "" !== o2 && (t2 && (t2 += " "), t2 += "-" == r[0] ? r : c[r] || (c[r] = r.replace(_, "-$1").toLowerCase()), t2 = "number" == typeof o2 && false === n.test(r) ? t2 + ": " + o2 + "px;" : t2 + ": " + o2 + ";");
  }
  return t2 || void 0;
}
function d(e2, t2) {
  return Array.isArray(t2) ? t2.reduce(d, e2) : null != t2 && false !== t2 && e2.push(t2), e2;
}
function v() {
  this.__d = true;
}
function h(e2, t2) {
  return { __v: e2, context: t2, props: e2.props, setState: v, forceUpdate: v, __d: true, __h: [] };
}
function g(e2, t2) {
  var r = e2.contextType, n2 = r && t2[r.__c];
  return null != r ? n2 ? n2.props.value : r.__ : t2;
}
var y = [];
function m(r, n2, a2, c2, _2, v2) {
  if (null == r || "boolean" == typeof r)
    return "";
  if ("object" != typeof r)
    return "function" == typeof r ? "" : s(r);
  var b2 = a2.pretty, x2 = b2 && "string" == typeof b2 ? b2 : "	";
  if (Array.isArray(r)) {
    for (var k2 = "", S2 = 0; S2 < r.length; S2++)
      b2 && S2 > 0 && (k2 += "\n"), k2 += m(r[S2], n2, a2, c2, _2, v2);
    return k2;
  }
  if (void 0 !== r.constructor)
    return "";
  var w2, C2 = r.type, O2 = r.props, j2 = false;
  if ("function" == typeof C2) {
    if (j2 = true, !a2.shallow || !c2 && false !== a2.renderRootComponent) {
      if (C2 === p$1) {
        var A2 = [];
        return d(A2, r.props.children), m(A2, n2, a2, false !== a2.shallowHighOrder, _2, v2);
      }
      var F2, H2 = r.__c = h(r, n2);
      l$1.__b && l$1.__b(r);
      var M2 = l$1.__r;
      if (C2.prototype && "function" == typeof C2.prototype.render) {
        var L2 = g(C2, n2);
        (H2 = r.__c = new C2(O2, L2)).__v = r, H2._dirty = H2.__d = true, H2.props = O2, null == H2.state && (H2.state = {}), null == H2._nextState && null == H2.__s && (H2._nextState = H2.__s = H2.state), H2.context = L2, C2.getDerivedStateFromProps ? H2.state = Object.assign({}, H2.state, C2.getDerivedStateFromProps(H2.props, H2.state)) : H2.componentWillMount && (H2.componentWillMount(), H2.state = H2._nextState !== H2.state ? H2._nextState : H2.__s !== H2.state ? H2.__s : H2.state), M2 && M2(r), F2 = H2.render(H2.props, H2.state, H2.context);
      } else
        for (var T2 = g(C2, n2), E = 0; H2.__d && E++ < 25; )
          H2.__d = false, M2 && M2(r), F2 = C2.call(r.__c, O2, T2);
      return H2.getChildContext && (n2 = Object.assign({}, n2, H2.getChildContext())), l$1.diffed && l$1.diffed(r), m(F2, n2, a2, false !== a2.shallowHighOrder, _2, v2);
    }
    C2 = (w2 = C2).displayName || w2 !== Function && w2.name || function(e2) {
      var t2 = (Function.prototype.toString.call(e2).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t2) {
        for (var r2 = -1, n3 = y.length; n3--; )
          if (y[n3] === e2) {
            r2 = n3;
            break;
          }
        r2 < 0 && (r2 = y.push(e2) - 1), t2 = "UnnamedComponent" + r2;
      }
      return t2;
    }(w2);
  }
  var $2, D, N2 = "<" + C2;
  if (O2) {
    var P = Object.keys(O2);
    a2 && true === a2.sortAttributes && P.sort();
    for (var W = 0; W < P.length; W++) {
      var I2 = P[W], R = O2[I2];
      if ("children" !== I2) {
        if (!i.test(I2) && (a2 && a2.allAttributes || "key" !== I2 && "ref" !== I2 && "__self" !== I2 && "__source" !== I2)) {
          if ("defaultValue" === I2)
            I2 = "value";
          else if ("defaultChecked" === I2)
            I2 = "checked";
          else if ("defaultSelected" === I2)
            I2 = "selected";
          else if ("className" === I2) {
            if (void 0 !== O2.class)
              continue;
            I2 = "class";
          } else
            _2 && l.test(I2) && (I2 = I2.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if ("htmlFor" === I2) {
            if (O2.for)
              continue;
            I2 = "for";
          }
          "style" === I2 && R && "object" == typeof R && (R = p(R)), "a" === I2[0] && "r" === I2[1] && "boolean" == typeof R && (R = String(R));
          var U = a2.attributeHook && a2.attributeHook(I2, R, n2, a2, j2);
          if (U || "" === U)
            N2 += U;
          else if ("dangerouslySetInnerHTML" === I2)
            D = R && R.__html;
          else if ("textarea" === C2 && "value" === I2)
            $2 = R;
          else if ((R || 0 === R || "" === R) && "function" != typeof R) {
            if (!(true !== R && "" !== R || (R = I2, a2 && a2.xml))) {
              N2 = N2 + " " + I2;
              continue;
            }
            if ("value" === I2) {
              if ("select" === C2) {
                v2 = R;
                continue;
              }
              "option" === C2 && v2 == R && void 0 === O2.selected && (N2 += " selected");
            }
            N2 = N2 + " " + I2 + '="' + s(R) + '"';
          }
        }
      } else
        $2 = R;
    }
  }
  if (b2) {
    var V = N2.replace(/\n\s*/, " ");
    V === N2 || ~V.indexOf("\n") ? b2 && ~N2.indexOf("\n") && (N2 += "\n") : N2 = V;
  }
  if (N2 += ">", i.test(C2))
    throw new Error(C2 + " is not a valid HTML tag name in " + N2);
  var q, z2 = o.test(C2) || a2.voidElements && a2.voidElements.test(C2), Z = [];
  if (D)
    b2 && u(D) && (D = "\n" + x2 + f(D, x2)), N2 += D;
  else if (null != $2 && d(q = [], $2).length) {
    for (var B = b2 && ~N2.indexOf("\n"), G = false, J = 0; J < q.length; J++) {
      var K = q[J];
      if (null != K && false !== K) {
        var Q = m(K, n2, a2, true, "svg" === C2 || "foreignObject" !== C2 && _2, v2);
        if (b2 && !B && u(Q) && (B = true), Q)
          if (b2) {
            var X = Q.length > 0 && "<" != Q[0];
            G && X ? Z[Z.length - 1] += Q : Z.push(Q), G = X;
          } else
            Z.push(Q);
      }
    }
    if (b2 && B)
      for (var Y = Z.length; Y--; )
        Z[Y] = "\n" + x2 + f(Z[Y], x2);
  }
  if (Z.length || D)
    N2 += Z.join("");
  else if (a2 && a2.xml)
    return N2.substring(0, N2.length - 1) + " />";
  return !z2 || q || D ? (b2 && ~N2.indexOf("\n") && (N2 += "\n"), N2 = N2 + "</" + C2 + ">") : N2 = N2.replace(/>$/, " />"), N2;
}
var b = { shallow: true };
S.render = S;
var x = function(e2, t2) {
  return S(e2, t2, b);
};
var k = [];
function S(n2, o2, i2) {
  o2 = o2 || {};
  var l2 = l$1.__s;
  l$1.__s = true;
  var a2, s2 = h$1(p$1, null);
  return s2.__k = [n2], a2 = i2 && (i2.pretty || i2.voidElements || i2.sortAttributes || i2.shallow || i2.allAttributes || i2.xml || i2.attributeHook) ? m(n2, o2, i2) : F(n2, o2, false, void 0, s2), l$1.__c && l$1.__c(n2, k), l$1.__s = l2, k.length = 0, a2;
}
function w(e2) {
  return null == e2 || "boolean" == typeof e2 ? null : "string" == typeof e2 || "number" == typeof e2 || "bigint" == typeof e2 ? h$1(null, null, e2) : e2;
}
function C(e2, t2) {
  return "className" === e2 ? "class" : "htmlFor" === e2 ? "for" : "defaultValue" === e2 ? "value" : "defaultChecked" === e2 ? "checked" : "defaultSelected" === e2 ? "selected" : t2 && l.test(e2) ? e2.toLowerCase().replace(/^xlink:?/, "xlink:") : e2;
}
function O(e2, t2) {
  return "style" === e2 && null != t2 && "object" == typeof t2 ? p(t2) : "a" === e2[0] && "r" === e2[1] && "boolean" == typeof t2 ? String(t2) : t2;
}
var j = Array.isArray;
var A = Object.assign;
function F(r, n2, l2, a2, f2) {
  if (null == r || true === r || false === r || "" === r)
    return "";
  if ("object" != typeof r)
    return "function" == typeof r ? "" : s(r);
  if (j(r)) {
    var u2 = "";
    f2.__k = r;
    for (var c2 = 0; c2 < r.length; c2++)
      u2 += F(r[c2], n2, l2, a2, f2), r[c2] = w(r[c2]);
    return u2;
  }
  if (void 0 !== r.constructor)
    return "";
  r.__ = f2, l$1.__b && l$1.__b(r);
  var _2 = r.type, p2 = r.props;
  if ("function" == typeof _2) {
    var d2;
    if (_2 === p$1)
      d2 = p2.children;
    else {
      d2 = _2.prototype && "function" == typeof _2.prototype.render ? function(e2, r2) {
        var n3 = e2.type, o2 = g(n3, r2), i2 = new n3(e2.props, o2);
        e2.__c = i2, i2.__v = e2, i2.__d = true, i2.props = e2.props, null == i2.state && (i2.state = {}), null == i2.__s && (i2.__s = i2.state), i2.context = o2, n3.getDerivedStateFromProps ? i2.state = A({}, i2.state, n3.getDerivedStateFromProps(i2.props, i2.state)) : i2.componentWillMount && (i2.componentWillMount(), i2.state = i2.__s !== i2.state ? i2.__s : i2.state);
        var l3 = l$1.__r;
        return l3 && l3(e2), i2.render(i2.props, i2.state, i2.context);
      }(r, n2) : function(e2, r2) {
        var n3, o2 = h(e2, r2), i2 = g(e2.type, r2);
        e2.__c = o2;
        for (var l3 = l$1.__r, a3 = 0; o2.__d && a3++ < 25; )
          o2.__d = false, l3 && l3(e2), n3 = e2.type.call(o2, e2.props, i2);
        return n3;
      }(r, n2);
      var v2 = r.__c;
      v2.getChildContext && (n2 = A({}, n2, v2.getChildContext()));
    }
    var y2 = F(d2 = null != d2 && d2.type === p$1 && null == d2.key ? d2.props.children : d2, n2, l2, a2, r);
    return l$1.diffed && l$1.diffed(r), r.__ = void 0, l$1.unmount && l$1.unmount(r), y2;
  }
  var m2, b2, x2 = "<";
  if (x2 += _2, p2)
    for (var k2 in m2 = p2.children, p2) {
      var S2 = p2[k2];
      if (!("key" === k2 || "ref" === k2 || "__self" === k2 || "__source" === k2 || "children" === k2 || "className" === k2 && "class" in p2 || "htmlFor" === k2 && "for" in p2 || i.test(k2))) {
        if (S2 = O(k2 = C(k2, l2), S2), "dangerouslySetInnerHTML" === k2)
          b2 = S2 && S2.__html;
        else if ("textarea" === _2 && "value" === k2)
          m2 = S2;
        else if ((S2 || 0 === S2 || "" === S2) && "function" != typeof S2) {
          if (true === S2 || "" === S2) {
            S2 = k2, x2 = x2 + " " + k2;
            continue;
          }
          if ("value" === k2) {
            if ("select" === _2) {
              a2 = S2;
              continue;
            }
            "option" !== _2 || a2 != S2 || "selected" in p2 || (x2 += " selected");
          }
          x2 = x2 + " " + k2 + '="' + s(S2) + '"';
        }
      }
    }
  var H2 = x2;
  if (x2 += ">", i.test(_2))
    throw new Error(_2 + " is not a valid HTML tag name in " + x2);
  var M2 = "", L2 = false;
  if (b2)
    M2 += b2, L2 = true;
  else if ("string" == typeof m2)
    M2 += s(m2), L2 = true;
  else if (j(m2)) {
    r.__k = m2;
    for (var T2 = 0; T2 < m2.length; T2++) {
      var E = m2[T2];
      if (m2[T2] = w(E), null != E && false !== E) {
        var $2 = F(E, n2, "svg" === _2 || "foreignObject" !== _2 && l2, a2, r);
        $2 && (M2 += $2, L2 = true);
      }
    }
  } else if (null != m2 && false !== m2 && true !== m2) {
    r.__k = [w(m2)];
    var D = F(m2, n2, "svg" === _2 || "foreignObject" !== _2 && l2, a2, r);
    D && (M2 += D, L2 = true);
  }
  if (l$1.diffed && l$1.diffed(r), r.__ = void 0, l$1.unmount && l$1.unmount(r), L2)
    x2 += M2;
  else if (o.test(_2))
    return H2 + " />";
  return x2 + "</" + _2 + ">";
}
S.shallowRender = x;
var contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "p" + this.c.toString();
    },
    signals: /* @__PURE__ */ new Map(),
    propsToSignals: /* @__PURE__ */ new Map()
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}
function isSignal(x2) {
  return x2 != null && typeof x2 === "object" && typeof x2.peek === "function" && "value" in x2;
}
function restoreSignalsOnProps(ctx, props) {
  let propMap;
  if (ctx.propsToSignals.has(props)) {
    propMap = ctx.propsToSignals.get(props);
  } else {
    propMap = /* @__PURE__ */ new Map();
    ctx.propsToSignals.set(props, propMap);
  }
  for (const [key, signal] of propMap) {
    props[key] = signal;
  }
  return propMap;
}
function serializeSignals(ctx, props, attrs, map) {
  const signals = {};
  for (const [key, value] of Object.entries(props)) {
    if (isSignal(value)) {
      props[key] = value.peek();
      map.set(key, value);
      let id;
      if (ctx.signals.has(value)) {
        id = ctx.signals.get(value);
      } else {
        id = incrementId(ctx);
        ctx.signals.set(value, id);
      }
      signals[key] = id;
    }
  }
  if (Object.keys(signals).length) {
    attrs["data-preact-signals"] = JSON.stringify(signals);
  }
}
var StaticHtml = ({ value, name }) => {
  if (!value)
    return null;
  return h$1("astro-slot", { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;
var slotName$1 = (str) => str.trim().replace(/[-_]([a-z])/g, (_2, w2) => w2.toUpperCase());
var originalConsoleError;
var consoleFilterRefs = 0;
function check$1(Component, props, children) {
  if (typeof Component !== "function")
    return false;
  if (Component.prototype != null && typeof Component.prototype.render === "function") {
    return d$1.isPrototypeOf(Component);
  }
  useConsoleFilter();
  try {
    try {
      const { html } = renderToStaticMarkup$1.call(this, Component, props, children);
      if (typeof html !== "string") {
        return false;
      }
      return !/\<undefined\>/.test(html);
    } catch (err) {
      return false;
    }
  } finally {
    finishUsingConsoleFilter();
  }
}
function renderToStaticMarkup$1(Component, props, { default: children, ...slotted }) {
  const ctx = getContext(this.result);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName$1(key);
    slots[name] = h$1(static_html_default, { value, name });
  }
  let propsMap = restoreSignalsOnProps(ctx, props);
  const newProps = { ...props, ...slots };
  const attrs = {};
  serializeSignals(ctx, props, attrs, propsMap);
  const html = S(
    h$1(Component, newProps, children != null ? h$1(static_html_default, { value: children }) : children)
  );
  return {
    attrs,
    html
  };
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error2) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
var server_default$1 = {
  check: check$1,
  renderToStaticMarkup: renderToStaticMarkup$1
};
var slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_2, w2) => w2.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e2) {
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
var server_default = {
  check,
  renderToStaticMarkup
};
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
var $$Astro$h = createAstro("/Users/paul/Desktop/hoopdex/src/components/Technologies.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$Technologies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Technologies;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", `<div class="hidden xl:flex absolute inset-0 -z-10">
	<div id="icons" class="relative [&>svg]:p-4 [&>svg]:w-21 [&>svg]:h-21 [&>svg]:fill-current [&>svg]:opacity-0 [&>svg]:absolute h-full">

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 512 512"><path d="M86.6 64C119 35.5 158.6 15 202.3 5.6C206 19.1 208 33.3 208 48c0 38.4-13.5 73.7-36.1 101.3L86.6 64zM64 86.6l85.2 85.2C121.7 194.5 86.4 208 48 208c-14.7 0-28.9-2-42.4-5.7C15 158.6 35.5 119 64 86.6zM256 0c64.9 0 124.2 24.2 169.4 64L256 233.4 194.6 172C222.9 138.5 240 95.3 240 48c0-16.2-2-32-5.8-47.1C241.4 .3 248.7 0 256 0zM48 240c47.3 0 90.5-17.1 124-45.4L233.4 256 64 425.4C24.2 380.2 0 320.9 0 256c0-7.3 .3-14.6 .9-21.8C16 238 31.8 240 48 240zm463.1 37.8C496 274 480.2 272 464 272c-47.3 0-90.5 17.1-124 45.4L278.6 256 448 86.6c39.8 45.1 64 104.4 64 169.4c0 7.3-.3 14.6-.9 21.8zm-4.7 31.9C497 353.4 476.5 393 448 425.4l-85.2-85.2C390.3 317.5 425.6 304 464 304c14.7 0 28.9 2 42.4 5.7zM340.1 362.7L425.4 448C393 476.5 353.4 497 309.7 506.4C306 492.9 304 478.7 304 464c0-38.4 13.5-73.7 36.1-101.3zM317.4 340C289.1 373.5 272 416.7 272 464c0 16.2 2 32 5.8 47.1c-7.2 .6-14.5 .9-21.8 .9c-64.9 0-124.2-24.2-169.4-64L256 278.6 317.4 340z"></path></svg>

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 20 20">
			<path d="M2 2h1v16H2V2zm1 15h15v1H3v-1z"></path>
			<path fill-rule="evenodd" d="M16.39 6.312l-4.349 5.437L9 8.707l-3.646 3.647-.708-.708L9 7.293l2.959 2.958 3.65-4.563.781.624z" clip-rule="evenodd"></path>
			<path fill-rule="evenodd" d="M12 5.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6h-3.5a.5.5 0 01-.5-.5z" clip-rule="evenodd"></path>
			</svg>

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"></path>
			<path fill-rule="evenodd" d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 1a6 6 0 100-12 6 6 0 000 12z" clip-rule="evenodd"></path>
			<path fill-rule="evenodd" d="M10 13a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z" clip-rule="evenodd"></path>
			<path d="M11.5 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
			</svg>

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M5.1 2.7a.5.5 0 01.4-.2h9a.5.5 0 01.4.2l2.976 3.974c.149.185.156.45.01.644L10.4 17.3a.5.5 0 01-.8 0l-7.5-10a.5.5 0 010-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H6.186l.963 2.995 5.704-.006zM7.47 7.495l5.062-.005L10 15.366 7.47 7.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM3.499 7.5l2.92-.003 2.193 6.82L3.5 7.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z" clip-rule="evenodd"></path>
			</svg>

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 20 20">
			<path d="M5 3h10c-.495 3.467-.5 10-5 10S5.495 6.467 5 3zm0 15a1 1 0 011-1h8a1 1 0 011 1H5zm2-1a1 1 0 011-1h4a1 1 0 011 1H7z"></path>
			<path fill-rule="evenodd" d="M14.5 5a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0zm-6-2a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z" clip-rule="evenodd"></path>
			<path d="M9 12h2v4H9v-4z"></path>
			<path d="M12 13c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z"></path>
			</svg>		

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM183.2 132.6c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L176 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L242.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm160 0c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L336 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L402.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm6.3 175.8c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5c10.4-16.1-6.8-32.5-25.5-28.1z"></path></svg>

	</div>
</div>

<script type="module">
	const hero = document.getElementById('icons')
	const svgs = Array.from(hero.querySelectorAll('svg'))

	const w = window.innerWidth
	const h = window.innerHeight - 300

	function animateBackgroundIcons() {
		const availableSvgs = svgs.filter((svg) => !svg.isAnimating)
		const svgToAnimate = availableSvgs[Math.floor(Math.random() * availableSvgs.length)]
		if (!svgToAnimate) return

		svgToAnimate.addEventListener(
			'animationend',
			() => {
				svgToAnimate.classList.remove('animate-moving-background')
				svgToAnimate.removeAttribute('style')
				svgToAnimate.isAnimating = false
			},
			{ once: true }
		)

		svgToAnimate.setAttribute(
			'style',
			\`top: \${Math.floor(Math.random() * h)}px;
				left: \${Math.floor(Math.random() * w)}px;\`
		)

		svgToAnimate.classList.add('animate-moving-background')
		svgToAnimate.isAnimating = true
	}

	setInterval(animateBackgroundIcons, 1000)
	animateBackgroundIcons()
<\/script>`], ["", `<div class="hidden xl:flex absolute inset-0 -z-10">
	<div id="icons" class="relative [&>svg]:p-4 [&>svg]:w-21 [&>svg]:h-21 [&>svg]:fill-current [&>svg]:opacity-0 [&>svg]:absolute h-full">

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 512 512"><path d="M86.6 64C119 35.5 158.6 15 202.3 5.6C206 19.1 208 33.3 208 48c0 38.4-13.5 73.7-36.1 101.3L86.6 64zM64 86.6l85.2 85.2C121.7 194.5 86.4 208 48 208c-14.7 0-28.9-2-42.4-5.7C15 158.6 35.5 119 64 86.6zM256 0c64.9 0 124.2 24.2 169.4 64L256 233.4 194.6 172C222.9 138.5 240 95.3 240 48c0-16.2-2-32-5.8-47.1C241.4 .3 248.7 0 256 0zM48 240c47.3 0 90.5-17.1 124-45.4L233.4 256 64 425.4C24.2 380.2 0 320.9 0 256c0-7.3 .3-14.6 .9-21.8C16 238 31.8 240 48 240zm463.1 37.8C496 274 480.2 272 464 272c-47.3 0-90.5 17.1-124 45.4L278.6 256 448 86.6c39.8 45.1 64 104.4 64 169.4c0 7.3-.3 14.6-.9 21.8zm-4.7 31.9C497 353.4 476.5 393 448 425.4l-85.2-85.2C390.3 317.5 425.6 304 464 304c14.7 0 28.9 2 42.4 5.7zM340.1 362.7L425.4 448C393 476.5 353.4 497 309.7 506.4C306 492.9 304 478.7 304 464c0-38.4 13.5-73.7 36.1-101.3zM317.4 340C289.1 373.5 272 416.7 272 464c0 16.2 2 32 5.8 47.1c-7.2 .6-14.5 .9-21.8 .9c-64.9 0-124.2-24.2-169.4-64L256 278.6 317.4 340z"></path></svg>

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 20 20">
			<path d="M2 2h1v16H2V2zm1 15h15v1H3v-1z"></path>
			<path fill-rule="evenodd" d="M16.39 6.312l-4.349 5.437L9 8.707l-3.646 3.647-.708-.708L9 7.293l2.959 2.958 3.65-4.563.781.624z" clip-rule="evenodd"></path>
			<path fill-rule="evenodd" d="M12 5.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6h-3.5a.5.5 0 01-.5-.5z" clip-rule="evenodd"></path>
			</svg>

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"></path>
			<path fill-rule="evenodd" d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 1a6 6 0 100-12 6 6 0 000 12z" clip-rule="evenodd"></path>
			<path fill-rule="evenodd" d="M10 13a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z" clip-rule="evenodd"></path>
			<path d="M11.5 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
			</svg>

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M5.1 2.7a.5.5 0 01.4-.2h9a.5.5 0 01.4.2l2.976 3.974c.149.185.156.45.01.644L10.4 17.3a.5.5 0 01-.8 0l-7.5-10a.5.5 0 010-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H6.186l.963 2.995 5.704-.006zM7.47 7.495l5.062-.005L10 15.366 7.47 7.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM3.499 7.5l2.92-.003 2.193 6.82L3.5 7.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z" clip-rule="evenodd"></path>
			</svg>

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 20 20">
			<path d="M5 3h10c-.495 3.467-.5 10-5 10S5.495 6.467 5 3zm0 15a1 1 0 011-1h8a1 1 0 011 1H5zm2-1a1 1 0 011-1h4a1 1 0 011 1H7z"></path>
			<path fill-rule="evenodd" d="M14.5 5a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0zm-6-2a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z" clip-rule="evenodd"></path>
			<path d="M9 12h2v4H9v-4z"></path>
			<path d="M12 13c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z"></path>
			</svg>		

		<svg width="50" height="50" fill="currentColor" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM183.2 132.6c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L176 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L242.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm160 0c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L336 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L402.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm6.3 175.8c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5c10.4-16.1-6.8-32.5-25.5-28.1z"></path></svg>

	</div>
</div>

<script type="module">
	const hero = document.getElementById('icons')
	const svgs = Array.from(hero.querySelectorAll('svg'))

	const w = window.innerWidth
	const h = window.innerHeight - 300

	function animateBackgroundIcons() {
		const availableSvgs = svgs.filter((svg) => !svg.isAnimating)
		const svgToAnimate = availableSvgs[Math.floor(Math.random() * availableSvgs.length)]
		if (!svgToAnimate) return

		svgToAnimate.addEventListener(
			'animationend',
			() => {
				svgToAnimate.classList.remove('animate-moving-background')
				svgToAnimate.removeAttribute('style')
				svgToAnimate.isAnimating = false
			},
			{ once: true }
		)

		svgToAnimate.setAttribute(
			'style',
			\\\`top: \\\${Math.floor(Math.random() * h)}px;
				left: \\\${Math.floor(Math.random() * w)}px;\\\`
		)

		svgToAnimate.classList.add('animate-moving-background')
		svgToAnimate.isAnimating = true
	}

	setInterval(animateBackgroundIcons, 1000)
	animateBackgroundIcons()
<\/script>`])), maybeRenderHead($$result));
}, "/Users/paul/Desktop/hoopdex/src/components/Technologies.astro");
var $$Astro$g = createAstro("/Users/paul/Desktop/hoopdex/src/components/icons/IconSun.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$IconSun = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$IconSun;
  const { className = "w-5 h-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <circle cx="12" cy="12" r="4"></circle>
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
</svg>`;
}, "/Users/paul/Desktop/hoopdex/src/components/icons/IconSun.astro");
var $$Astro$f = createAstro("/Users/paul/Desktop/hoopdex/src/components/icons/IconUnlock.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$IconUnlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$IconUnlock;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg width="24" height="24" fill="currentColor" viewBox="0 0 576 512"><path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"></path></svg>`;
}, "/Users/paul/Desktop/hoopdex/src/components/icons/IconUnlock.astro");
var $$Astro$e = createAstro("/Users/paul/Desktop/hoopdex/src/components/icons/IconPreview.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$IconPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$IconPreview;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 8C24 12.4183 17.3736 16 12 16C6.62642 16 0 12.4183 0 8C0 3.58172 6.62642 0 12 0C17.3736 0 24 3.58172 24 8Z" fill="#79869F"></path>
  <path d="M17.1889 7.99982C17.1889 11.2131 14.8656 13.818 11.9997 13.818C9.13383 13.818 6.81055 11.2131 6.81055 7.99982C6.81055 4.78653 9.13383 2.18164 11.9997 2.18164C14.8656 2.18164 17.1889 4.78653 17.1889 7.99982Z" fill="white"></path>
  <path d="M14.5945 8.00089C14.5945 9.60753 13.4328 10.91 11.9999 10.91C10.5669 10.91 9.40527 9.60753 9.40527 8.00089C9.40527 6.39424 10.5669 5.0918 11.9999 5.0918C13.4328 5.0918 14.5945 6.39424 14.5945 8.00089Z" fill="#79869F"></path>
  </svg>`;
}, "/Users/paul/Desktop/hoopdex/src/components/icons/IconPreview.astro");
var $$Astro$d = createAstro("/Users/paul/Desktop/hoopdex/src/components/icons/IconHome.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$IconHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$IconHome;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg width="24" height="24" fill="currentColor" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>`;
}, "/Users/paul/Desktop/hoopdex/src/components/icons/IconHome.astro");
var $$Astro$c = createAstro("/Users/paul/Desktop/hoopdex/src/components/icons/IconInstagram.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$IconInstagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$IconInstagram;
  const { className = "w-5 h-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
  <circle cx="12" cy="12" r="3"></circle>
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
</svg>`;
}, "/Users/paul/Desktop/hoopdex/src/components/icons/IconInstagram.astro");
var $$Astro$b = createAstro("/Users/paul/Desktop/hoopdex/src/components/icons/IconUser.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$IconUser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$IconUser;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg width="24" height="24" fill="currentColor" viewBox="0 0 512 512"><path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"></path></svg>`;
}, "/Users/paul/Desktop/hoopdex/src/components/icons/IconUser.astro");
var $$Astro$a = createAstro("/Users/paul/Desktop/hoopdex/src/components/icons/IconBlog.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$IconBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$IconBlog;
  const { className = "w-5 h-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
  <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path>
</svg>

<svg width="50" height="50" fill="currentColor" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>`;
}, "/Users/paul/Desktop/hoopdex/src/components/icons/IconBlog.astro");
var $$Astro$9 = createAstro("/Users/paul/Desktop/hoopdex/src/components/icons/IconHoopdex.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$IconHoopdex = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$IconHoopdex;
  return renderTemplate`${maybeRenderHead($$result)}<svg width="250" height="100" viewBox="0 0 1103 233" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M128 43.4111C105.101 77.3461 72.8153 147.188 90.1129 215.411" stroke="#8ED0E6" stroke-width="24" stroke-linecap="square"></path>
  <path d="M69.3353 53.4111C77.1152 93.4111 57.3961 129.411 15 138.411" stroke="#F4A36B" stroke-width="24" stroke-linecap="square"></path>
  <path d="M77.5 89.4108C69.0529 130.439 33.5 144.411 15 146.911C32 139.325 48 129.575 63 104.825C78 80.0752 79 60.8252 79 60.8252C79 60.8252 80.7088 73.8252 77.5 89.4108Z" fill="#ED853E"></path>
  <path d="M100 137.412C109.641 96.4912 122 69.9121 131 53.9121C119 68.5001 107.5 87.5001 99.0001 108C78.2682 158 96.0001 202.5 96.0001 202.5C96.0001 202.5 93.5001 165 100 137.412Z" fill="#4BBCE0"></path>
  <path d="M168 65.4111C123.712 88.4111 119.305 165.911 150.778 189.411" stroke="#F1863D" stroke-width="24" stroke-linecap="square"></path>
  <path d="M98.1914 15.4596C168.117 -2.64688 230.162 53.2409 224.66 115.039C215.585 216.969 98.1914 248.927 34 195.288" stroke="#64C6E6" stroke-width="24" stroke-linecap="square"></path>
  <path d="M27.4614 79.6436C58.5794 127.162 121.235 143.023 196.372 115.119" stroke="#F38C45" stroke-width="24" stroke-linecap="square"></path>
  <path d="M152.5 201.5L163 187.326C163 187.326 157 184.326 150.5 177.326C145.252 171.674 141.5 158.5 141.5 158.5C141.5 158.5 139.56 179.367 143 189C145.5 196 152.5 201.5 152.5 201.5Z" fill="#EC6F1A"></path>
  <path d="M93.5 26.3256L89.5 9.32559C89.5 9.32559 140 -7.17438 182 17.9115C140 8.91153 112 21.9115 112 21.9115L93.5 26.3256Z" fill="#A3DEF2"></path>
  <path d="M73 225.017C120.798 229.518 154.451 222.017 186.641 196.013C226.184 164.068 232 120 232 120C229.074 149.679 221.758 180.17 188.592 208.189C155.426 236.208 105.678 236.194 73 225.017Z" fill="#1B9BC5"></path>
  <path d="M207 120.216C207 120.216 143.806 145.558 102 135.739C102 135.739 136.514 133.586 161.792 126.653C187.069 119.721 203.111 109 203.111 109L207 120.216Z" fill="#E7772B"></path>
  <path d="M54 95.9996C26.5 76.3253 23.5 86.9996 15.5 76.3253L30 66.8252C30 66.8252 45 87.4997 54 95.9996Z" fill="#FCA468"></path>
  <path d="M138 81C130.461 91.5 125.5 110 125.5 110C132 93.5 136.961 87.2925 143.5 79C151.367 69.0231 171.5 54 171.5 54C171.5 54 152 61.5 138 81Z" fill="#FFA76B"></path>
  <path d="M284.515 85.5L275.065 71.1H321.415L310.315 107.55H345.115L356.215 71.1H388.765L359.065 168H326.515L337.615 131.55H302.815L291.715 168H259.165L284.515 85.5ZM403.46 85.5L394.01 71.1H507.71L478.01 168H378.11L403.46 85.5ZM433.01 95.25L418.01 144H452.81L467.81 95.25H433.01ZM522.405 85.5L512.955 71.1H626.655L596.955 168H497.055L522.405 85.5ZM551.955 95.25L536.955 144H571.755L586.755 95.25H551.955ZM745.601 71.1L725.351 136.95H658.001L648.551 168H616.001L641.351 85.5L631.901 71.1H745.601ZM670.901 95.25L665.501 112.95H700.301L705.701 95.25H670.901Z" fill="#F38C45"></path>
  <path d="M734.799 168L760.149 85.5L750.699 71.1H864.399L843.699 138.75L804.699 168H734.799ZM824.499 95.25H789.699L774.699 144H792.099L814.899 126L824.499 95.25ZM908.645 95.25L904.895 107.55H972.245L964.745 131.55H897.395L893.645 144H960.845L953.645 168H853.745L879.095 85.5L869.645 71.1H983.345L975.845 95.25H908.645ZM1072.44 168H1039.89L1045.59 149.1L1033.89 131.4L1010.79 149.4L1005.09 168H972.54L981.99 136.95L1004.94 119.55L992.94 102.15L998.04 85.5L988.59 71.1H1034.94L1029.24 89.7L1040.94 107.7L1064.04 90L1069.74 71.1H1102.29L1092.69 102.45L1069.89 119.7L1082.04 136.65L1072.44 168Z" fill="#5FBFDE"></path>
  </svg>`;
}, "/Users/paul/Desktop/hoopdex/src/components/icons/IconHoopdex.astro");
var $$Astro$8 = createAstro("/Users/paul/Desktop/hoopdex/src/components/icons/IconMenu.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$IconMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$IconMenu;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 first" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
	<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16"></path>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="hidden w-6 h-6 last" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
	<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg>`;
}, "/Users/paul/Desktop/hoopdex/src/components/icons/IconMenu.astro");
var $$Astro$7 = createAstro("/Users/paul/Desktop/hoopdex/src/components/RoundIconButton.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$RoundIconButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$RoundIconButton;
  return renderTemplate``;
}, "/Users/paul/Desktop/hoopdex/src/components/RoundIconButton.astro");
var $$Astro$6 = createAstro("/Users/paul/Desktop/hoopdex/src/components/SquareIconLink.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$SquareIconLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SquareIconLink;
  const { title, href, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute(title, "title")} class="text-light-blue-light hover:text-light-blue-dark dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0">
  ${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/Users/paul/Desktop/hoopdex/src/components/SquareIconLink.astro");
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
var $$Astro$5 = createAstro("/Users/paul/Desktop/hoopdex/src/components/Layout.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/x-icon" href="/favicon.ico">\n		<title>', "</title>\n	", '</head>\n\n	<body class="flex flex-col items-center justify-center relative box-border min-h-screen bg-light-primary dark:bg-gradient-main-dark">\n		', '\n		<main class="flex flex-col p-1 m-1 md:p-3 md:my-10 md:mx-12 lg:my-0 w-fit lg:w-[calc(100vw_-_9%)] rounded-tr-2xl rounded-tl-lg rounded-b-lg justify-between">\n			<div class="flex w-full relative mb-2 md:mb-4">\n				<div class="flex w-15 -top-5 sm:top-0 sm:w-fit absolute">\n					<a href="/" target="_self" title="Go to the target page" class="flex w-15 -top-5 sm:top-0 sm:w-fit absolute">\n						', '\n					  </a>\n				</div>\n				<div class="flex items-center text-right ml-auto text-xl w-fit text-light-blue-dark dark:text-dark-blue-light">\n				<h1 class="font-black leading-extra-loose md:text-4xl 2xl:text-5xl">\n				  </h1>\n				  \n				</div>\n\n				<div class="flex w-fit h-fit px-1 py-0 ml-4 2xl:ml-8 shadow-switcher rounded-2xl dark:bg-buttons-box-dark dark:shadow-box-dark-out">\n					<div class="dark:shadow-buttons-box-dark rounded-2xl w-min flex sm:w-full px-1.5 py-1.5 md:px-3 md:py-3 h-fit">\n\n					', "</div>\n				</div>\n			</div>\n			", '\n			\n\n		</main>\n\n		<script>\n			const toggleTheme = () => {\n				document.documentElement.classList.toggle("dark");\n				localStorage.theme = document.documentElement.classList.contains("dark")\n					? "dark"\n					: "light";\n			};\n\n			window.toggleTheme = toggleTheme;\n\n			if (localStorage.theme === "dark") {\n				document.documentElement.classList.add("dark");\n			} else {\n				document.documentElement.classList.remove("dark");\n			}\n		<\/script>\n	</body>\n</html>'])), title, renderHead($$result), renderComponent($$result, "Technologies", $$Technologies, {}), renderComponent($$result, "IconHoopdex", $$IconHoopdex, {}), renderComponent($$result, "SquareIconLink", $$SquareIconLink, { "title": "Unlock Full Dex", "href": "https://www.patreon.com/Hoopdex", "target": "_blank" }, { "default": () => renderTemplate`<div class="text">
					<div class="icon">
    <p>Unlock Full Dex</p>
    ${renderComponent($$result, "IconUnlock", $$IconUnlock, {})}
 					</div>
					</div>${renderComponent($$result, "SquareIconLink", $$SquareIconLink, { "title": "Daily Team", "target": "_self", "href": "/postlist" }, { "default": () => renderTemplate`<div class="text">
						<div class="icon">
		<p>Preview Dex</p>
		${renderComponent($$result, "IconPreview", $$IconPreview, {})}
						 </div>
						</div>${renderComponent($$result, "SquareIconLink", $$SquareIconLink, { "title": "About Us", "target": "_self", "href": "/aboutme" }, { "default": () => renderTemplate`<div class="text">
							<div class="icon">
			<p>About Us</p>
			${renderComponent($$result, "IconUser", $$IconUser, {})}
							 </div>
							</div>` })}<span class="mr-4"></span><button type="button" onclick="window.toggleTheme()" class="text-light-blue-light hover:text-light-blue-dark dark:text-gray-400 bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-md text-sm p-2.5 text-center inline-flex items-center mr-4 last-of-type:mr-0 border-2 border-transparent dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<circle cx="12" cy="12" r="4"></circle>
						<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
					  </svg>
						<span class="sr-only"> Theme color switcher</span>
					  </button>${renderComponent($$result, "RoundIconButton", $$RoundIconButton, { "title": "Light/Dark Mode", "srOnly": "Theme color switcher", "type": "button", "onclick": "window.toggleTheme()" })}` })}` }), renderSlot($$result, $$slots["default"]));
}, "/Users/paul/Desktop/hoopdex/src/components/Layout.astro");
var Homepageimage = "/assets/homepagep.f39f251b.png";
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
var $$Astro$4 = createAstro("/Users/paul/Desktop/hoopdex/src/components/Homepage.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$Homepage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Homepage;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="flex flex-row astro-CCLMMZ74">\n	<div class="p-2.5 my-2 md:my-4 shadow-up dark:shadow-box-dark dark:bg-box-dark w-full 2xl:mx-auto rounded-lg astro-CCLMMZ74">\n	  <div class="flex flex-col items-center justify-center astro-CCLMMZ74">\n		<div class="atropos py-4 px-6 2xl:px-10 shadow-down dark:shadow-box-dark dark:bg-box-dark w-full m-auto astro-CCLMMZ74">\n		  <div class="atropos-scale astro-CCLMMZ74">\n			<div class="atropos-inner transition-all duration-700 relative p-2 border-2 rounded-md shadow-2xl border-light-blue-dark dark:border-gray-dark bg-gray-light-4 dark:bg-transparent md:backdrop-blur-sm flex flex-col astro-CCLMMZ74">\n			  <div class="atropos-inner transition-all duration-700 relative py-4 px-2 md:px-8 2xl:px-15 border-4 rounded-md shadow-2xl border-light-blue-dark bg-gray-light-4 md:backdrop-blur-sm flex flex-col dark:border-gray-dark dark:bg-transparent dark:shadow-orange-dark astro-CCLMMZ74">\n				<div class="image-container astro-CCLMMZ74">\n				  <img class="image-class astro-CCLMMZ74"', ` style="width: 100%; height: 100%; object-fit: cover;">
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
  
  
  


<script type="module">
	// @ts-nocheck
	/* eslint-disable */
	!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Atropos = e() }(this, (function () { "use strict"; function t() { return (t = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var o = arguments[e]; for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]) } return t }).apply(this, arguments) } var e = function (t, e) { return t.querySelector(e) }, o = function (t) { void 0 === t && (t = {}); var e = {}; return Object.keys(t).forEach((function (o) { void 0 !== t[o] && (e[o] = t[o]) })), e }; return function (a) { void 0 === a && (a = {}); var n, r, i, s, c, u, p, l, d, f, v, h = a, m = h.el, y = h.eventsEl, g = { __atropos__: !0, params: t({ alwaysActive: !1, activeOffset: 50, shadowOffset: 50, shadowScale: 1, duration: 300, rotate: !0, rotateTouch: !0, rotateXMax: 15, rotateYMax: 15, rotateXInvert: !1, rotateYInvert: !1, stretchX: 0, stretchY: 0, stretchZ: 0, commonOrigin: !0, shadow: !0, highlight: !0, onEnter: null, onLeave: null, onRotate: null }, o(a || {})), destroyed: !1, isActive: !1 }, M = g.params, x = []; !function t() { v = requestAnimationFrame((function () { x.forEach((function (t) { if ("function" == typeof t) t(); else { var e = t.element, o = t.prop, a = t.value; e.style[o] = a } })), x.splice(0, x.length), t() })) }(); var w, O = function (t, e) { x.push({ element: t, prop: "transitionDuration", value: e }) }, b = function (t, e) { x.push({ element: t, prop: "transitionTimingFunction", value: e }) }, T = function (t, e) { x.push({ element: t, prop: "transform", value: e }) }, X = function (t, e) { x.push({ element: t, prop: "opacity", value: e }) }, Y = function (t, e, o, a) { return t.addEventListener(e, o, a) }, _ = function (t, e, o, a) { return t.removeEventListener(e, o, a) }, L = function (t) { var e = t.rotateXPercentage, o = void 0 === e ? 0 : e, a = t.rotateYPercentage, n = void 0 === a ? 0 : a, r = t.duration, i = t.opacityOnly, s = t.easeOut; (function (t, e) { return t.querySelectorAll(e) })(m, "[data-atropos-offset], [data-atropos-opacity]").forEach((function (t) { O(t, r), b(t, s ? "ease-out" : ""); var e = function (t) { if (t.dataset.atroposOpacity && "string" == typeof t.dataset.atroposOpacity) return t.dataset.atroposOpacity.split(";").map((function (t) { return parseFloat(t) })) }(t); if (0 === o && 0 === n) i || T(t, "translate3d(0, 0, 0)"), e && X(t, e[0]); else { var a = parseFloat(t.dataset.atroposOffset) / 100; if (Number.isNaN(a) || i || T(t, "translate3d(" + -n * -a + "%, " + o * -a + "%, 0)"), e) { var c = e[0], u = e[1], p = Math.max(Math.abs(o), Math.abs(n)); X(t, c + (u - c) * p / 100) } } })) }, A = function (t, e) { var o = m !== y; if (s || (s = m.getBoundingClientRect()), o && !c && (c = y.getBoundingClientRect()), void 0 === t && void 0 === e) { var a = o ? c : s; t = a.left + a.width / 2, e = a.top + a.height / 2 } var r, i = 0, u = 0, l = s, d = l.top, f = l.left, v = l.width, h = l.height; if (o) { var g = c, w = g.top, Y = g.left, _ = g.width, A = g.height, E = v / 2 + (f - Y), R = h / 2 + (d - w), I = t - Y, P = e - w; u = M.rotateYMax * (I - E) / (_ - v / 2) * -1, i = M.rotateXMax * (P - R) / (A - h / 2), r = t - f + "px " + (e - d) + "px" } else { var j = v / 2, D = h / 2, F = t - f, C = e - d; u = M.rotateYMax * (F - j) / (v / 2) * -1, i = M.rotateXMax * (C - D) / (h / 2) } i = Math.min(Math.max(-i, -M.rotateXMax), M.rotateXMax), M.rotateXInvert && (i = -i), u = Math.min(Math.max(-u, -M.rotateYMax), M.rotateYMax), M.rotateYInvert && (u = -u); var S, k, q = i / M.rotateXMax * 100, N = u / M.rotateYMax * 100, B = (o ? N / 100 * M.stretchX : 0) * (M.rotateYInvert ? -1 : 1), Z = (o ? q / 100 * M.stretchY : 0) * (M.rotateXInvert ? -1 : 1), z = o ? Math.max(Math.abs(q), Math.abs(N)) / 100 * M.stretchZ : 0; T(n, "translate3d(" + B + "%, " + -Z + "%, " + -z + "px) rotateX(" + i + "deg) rotateY(" + u + "deg)"), r && M.commonOrigin && (S = n, k = r, x.push({ element: S, prop: "transformOrigin", value: k })), p && (O(p, M.duration + "ms"), b(p, "ease-out"), T(p, "translate3d(" + .25 * -N + "%, " + .25 * q + "%, 0)"), X(p, Math.max(Math.abs(q), Math.abs(N)) / 100)), L({ rotateXPercentage: q, rotateYPercentage: N, duration: M.duration + "ms", easeOut: !0 }), "function" == typeof M.onRotate && M.onRotate(i, u) }, E = function () { x.push((function () { return m.classList.add("atropos-active") })), O(n, M.duration + "ms"), b(n, "ease-out"), T(r, "translate3d(0,0, " + M.activeOffset + "px)"), O(r, M.duration + "ms"), b(r, "ease-out"), u && (O(u, M.duration + "ms"), b(u, "ease-out")), g.isActive = !0 }, R = function (t) { if (l = void 0, !("pointerdown" === t.type && "mouse" === t.pointerType || "pointerenter" === t.type && "mouse" !== t.pointerType)) { if ("pointerdown" === t.type && t.preventDefault(), d = t.clientX, f = t.clientY, M.alwaysActive) return s = void 0, void (c = void 0); E(), "function" == typeof M.onEnter && M.onEnter() } }, I = function (t) { !1 === l && t.cancelable && t.preventDefault() }, P = function (t) { if (M.rotate && g.isActive) { if ("mouse" !== t.pointerType) { if (!M.rotateTouch) return; t.preventDefault() } var e = t.clientX, o = t.clientY, a = e - d, n = o - f; if ("string" == typeof M.rotateTouch && (0 !== a || 0 !== n) && void 0 === l) { if (a * a + n * n >= 25) { var r = 180 * Math.atan2(Math.abs(n), Math.abs(a)) / Math.PI; l = "scroll-y" === M.rotateTouch ? r > 45 : 90 - r > 45 } !1 === l && (m.classList.add("atropos-rotate-touch"), t.cancelable && t.preventDefault()) } "mouse" !== t.pointerType && l || A(e, o) } }, j = function (t) { if (s = void 0, c = void 0, g.isActive && !(t && "pointerup" === t.type && "mouse" === t.pointerType || t && "pointerleave" === t.type && "mouse" !== t.pointerType)) { if ("string" == typeof M.rotateTouch && l && m.classList.remove("atropos-rotate-touch"), M.alwaysActive) return A(), "function" == typeof M.onRotate && M.onRotate(0, 0), void ("function" == typeof M.onLeave && M.onLeave()); x.push((function () { return m.classList.remove("atropos-active") })), O(r, M.duration + "ms"), b(r, ""), T(r, "translate3d(0,0, 0px)"), u && (O(u, M.duration + "ms"), b(u, "")), p && (O(p, M.duration + "ms"), b(p, ""), T(p, "translate3d(0, 0, 0)"), X(p, 0)), O(n, M.duration + "ms"), b(n, ""), T(n, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"), L({ duration: M.duration + "ms" }), g.isActive = !1, "function" == typeof M.onRotate && M.onRotate(0, 0), "function" == typeof M.onLeave && M.onLeave() } }, D = function (t) { var e = t.target; !y.contains(e) && e !== y && g.isActive && j() }; return g.destroy = function () { g.destroyed = !0, cancelAnimationFrame(v), _(document, "click", D), _(y, "pointerdown", R), _(y, "pointerenter", R), _(y, "pointermove", P), _(y, "touchmove", I), _(y, "pointerleave", j), _(y, "pointerup", j), _(y, "lostpointercapture", j), delete m.__atropos__ }, "string" == typeof m && (m = e(document, m)), m && (m.__atropos__ || (void 0 !== y ? "string" == typeof y && (y = e(document, y)) : y = m, Object.assign(g, { el: m }), n = e(m, ".atropos-rotate"), r = e(m, ".atropos-scale"), i = e(m, ".atropos-inner"), m.__atropos__ = g)), m && y && (M.shadow && ((u = e(m, ".atropos-shadow")) || ((u = document.createElement("span")).classList.add("atropos-shadow"), w = !0), T(u, "translate3d(0,0,-" + M.shadowOffset + "px) scale(" + M.shadowScale + ")"), w && n.appendChild(u)), M.highlight && function () { var t; (p = e(m, ".atropos-highlight")) || ((p = document.createElement("span")).classList.add("atropos-highlight"), t = !0), T(p, "translate3d(0,0,0)"), t && i.appendChild(p) }(), M.rotateTouch && ("string" == typeof M.rotateTouch ? m.classList.add("atropos-rotate-touch-" + M.rotateTouch) : m.classList.add("atropos-rotate-touch")), e(m, "[data-atropos-opacity]") && L({ opacityOnly: !0 }), Y(document, "click", D), Y(y, "pointerdown", R), Y(y, "pointerenter", R), Y(y, "pointermove", P), Y(y, "touchmove", I), Y(y, "pointerleave", j), Y(y, "pointerup", j), Y(y, "lostpointercapture", j), M.alwaysActive && (E(), A())), g } })); /* eslint-enable */
	/* eslint-enable */

	window.Atropos({
		el: '.atropos',
		activeOffset: 120,
		shadowScale: 5
	})

<\/script>`])), maybeRenderHead($$result), addAttribute(Homepageimage, "src"));
}, "/Users/paul/Desktop/hoopdex/src/components/Homepage.astro");
var $$Astro$3 = createAstro("/Users/paul/Desktop/hoopdex/src/pages/index.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro Neumorphism template" }, { "default": () => renderTemplate`${renderComponent($$result, "Homepage", $$Homepage, {})}${maybeRenderHead($$result)}<div class="hidden lg:flex 2xl:hidden">
	</div>` })}`;
}, "/Users/paul/Desktop/hoopdex/src/pages/index.astro");
var $$file$2 = "/Users/paul/Desktop/hoopdex/src/pages/index.astro";
var $$url$2 = "";
var _page0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: "Module" }));
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
var $$Astro$2 = createAstro("/Users/paul/Desktop/hoopdex/src/components/MainCard.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$MainCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainCard;
  return renderTemplate(_a || (_a = __template(["", `<div class="flex flex-row astro-NAKX7HJ6">
	<div class="p-2.5 my-2 md:my-4 shadow-up dark:shadow-box-dark dark:bg-box-dark w-full 2xl:mx-auto rounded-lg astro-NAKX7HJ6">
	  <div class="flex flex-col items-center justify-center astro-NAKX7HJ6">
		<div class="atropos py-4 px-6 2xl:px-10 shadow-down dark:shadow-box-dark dark:bg-box-dark w-full m-auto astro-NAKX7HJ6">
		  <div class="atropos-scale astro-NAKX7HJ6">
			  <div class="atropos-inner transition-all duration-700 relative p-2 border-2 rounded-md shadow-2xl border-light-blue-dark dark:border-gray-dark bg-gray-light-4 dark:bg-transparent md:backdrop-blur-sm flex flex-col astro-NAKX7HJ6">
				<div class="atropos-inner transition-all duration-700 relative py-4 px-2 md:px-8 2xl:px-15 border-4 rounded-md shadow-2xl border-light-blue-dark bg-gray-light-4 md:backdrop-blur-sm flex flex-col dark:border-gray-dark dark:bg-transparent dark:shadow-orange-dark astro-NAKX7HJ6">
				  <div class="iframe-container astro-NAKX7HJ6" style="width: 100%; height: 600px;">
					<iframe src="https://docs.google.com/spreadsheets/d/1thHjaTmN3LYS5LSnMhvz-Evjr44roX_qJKX8LZbERH4/edit?usp=sharing&single=true&widget=true&headers=false&rm=minimal&fzr=false" style="width: 110%; height: 100vh;" class="astro-NAKX7HJ6"></iframe>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  
  
  


<script type="module">
	// @ts-nocheck
	/* eslint-disable */
	!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Atropos = e() }(this, (function () { "use strict"; function t() { return (t = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var o = arguments[e]; for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]) } return t }).apply(this, arguments) } var e = function (t, e) { return t.querySelector(e) }, o = function (t) { void 0 === t && (t = {}); var e = {}; return Object.keys(t).forEach((function (o) { void 0 !== t[o] && (e[o] = t[o]) })), e }; return function (a) { void 0 === a && (a = {}); var n, r, i, s, c, u, p, l, d, f, v, h = a, m = h.el, y = h.eventsEl, g = { __atropos__: !0, params: t({ alwaysActive: !1, activeOffset: 50, shadowOffset: 50, shadowScale: 1, duration: 300, rotate: !0, rotateTouch: !0, rotateXMax: 15, rotateYMax: 15, rotateXInvert: !1, rotateYInvert: !1, stretchX: 0, stretchY: 0, stretchZ: 0, commonOrigin: !0, shadow: !0, highlight: !0, onEnter: null, onLeave: null, onRotate: null }, o(a || {})), destroyed: !1, isActive: !1 }, M = g.params, x = []; !function t() { v = requestAnimationFrame((function () { x.forEach((function (t) { if ("function" == typeof t) t(); else { var e = t.element, o = t.prop, a = t.value; e.style[o] = a } })), x.splice(0, x.length), t() })) }(); var w, O = function (t, e) { x.push({ element: t, prop: "transitionDuration", value: e }) }, b = function (t, e) { x.push({ element: t, prop: "transitionTimingFunction", value: e }) }, T = function (t, e) { x.push({ element: t, prop: "transform", value: e }) }, X = function (t, e) { x.push({ element: t, prop: "opacity", value: e }) }, Y = function (t, e, o, a) { return t.addEventListener(e, o, a) }, _ = function (t, e, o, a) { return t.removeEventListener(e, o, a) }, L = function (t) { var e = t.rotateXPercentage, o = void 0 === e ? 0 : e, a = t.rotateYPercentage, n = void 0 === a ? 0 : a, r = t.duration, i = t.opacityOnly, s = t.easeOut; (function (t, e) { return t.querySelectorAll(e) })(m, "[data-atropos-offset], [data-atropos-opacity]").forEach((function (t) { O(t, r), b(t, s ? "ease-out" : ""); var e = function (t) { if (t.dataset.atroposOpacity && "string" == typeof t.dataset.atroposOpacity) return t.dataset.atroposOpacity.split(";").map((function (t) { return parseFloat(t) })) }(t); if (0 === o && 0 === n) i || T(t, "translate3d(0, 0, 0)"), e && X(t, e[0]); else { var a = parseFloat(t.dataset.atroposOffset) / 100; if (Number.isNaN(a) || i || T(t, "translate3d(" + -n * -a + "%, " + o * -a + "%, 0)"), e) { var c = e[0], u = e[1], p = Math.max(Math.abs(o), Math.abs(n)); X(t, c + (u - c) * p / 100) } } })) }, A = function (t, e) { var o = m !== y; if (s || (s = m.getBoundingClientRect()), o && !c && (c = y.getBoundingClientRect()), void 0 === t && void 0 === e) { var a = o ? c : s; t = a.left + a.width / 2, e = a.top + a.height / 2 } var r, i = 0, u = 0, l = s, d = l.top, f = l.left, v = l.width, h = l.height; if (o) { var g = c, w = g.top, Y = g.left, _ = g.width, A = g.height, E = v / 2 + (f - Y), R = h / 2 + (d - w), I = t - Y, P = e - w; u = M.rotateYMax * (I - E) / (_ - v / 2) * -1, i = M.rotateXMax * (P - R) / (A - h / 2), r = t - f + "px " + (e - d) + "px" } else { var j = v / 2, D = h / 2, F = t - f, C = e - d; u = M.rotateYMax * (F - j) / (v / 2) * -1, i = M.rotateXMax * (C - D) / (h / 2) } i = Math.min(Math.max(-i, -M.rotateXMax), M.rotateXMax), M.rotateXInvert && (i = -i), u = Math.min(Math.max(-u, -M.rotateYMax), M.rotateYMax), M.rotateYInvert && (u = -u); var S, k, q = i / M.rotateXMax * 100, N = u / M.rotateYMax * 100, B = (o ? N / 100 * M.stretchX : 0) * (M.rotateYInvert ? -1 : 1), Z = (o ? q / 100 * M.stretchY : 0) * (M.rotateXInvert ? -1 : 1), z = o ? Math.max(Math.abs(q), Math.abs(N)) / 100 * M.stretchZ : 0; T(n, "translate3d(" + B + "%, " + -Z + "%, " + -z + "px) rotateX(" + i + "deg) rotateY(" + u + "deg)"), r && M.commonOrigin && (S = n, k = r, x.push({ element: S, prop: "transformOrigin", value: k })), p && (O(p, M.duration + "ms"), b(p, "ease-out"), T(p, "translate3d(" + .25 * -N + "%, " + .25 * q + "%, 0)"), X(p, Math.max(Math.abs(q), Math.abs(N)) / 100)), L({ rotateXPercentage: q, rotateYPercentage: N, duration: M.duration + "ms", easeOut: !0 }), "function" == typeof M.onRotate && M.onRotate(i, u) }, E = function () { x.push((function () { return m.classList.add("atropos-active") })), O(n, M.duration + "ms"), b(n, "ease-out"), T(r, "translate3d(0,0, " + M.activeOffset + "px)"), O(r, M.duration + "ms"), b(r, "ease-out"), u && (O(u, M.duration + "ms"), b(u, "ease-out")), g.isActive = !0 }, R = function (t) { if (l = void 0, !("pointerdown" === t.type && "mouse" === t.pointerType || "pointerenter" === t.type && "mouse" !== t.pointerType)) { if ("pointerdown" === t.type && t.preventDefault(), d = t.clientX, f = t.clientY, M.alwaysActive) return s = void 0, void (c = void 0); E(), "function" == typeof M.onEnter && M.onEnter() } }, I = function (t) { !1 === l && t.cancelable && t.preventDefault() }, P = function (t) { if (M.rotate && g.isActive) { if ("mouse" !== t.pointerType) { if (!M.rotateTouch) return; t.preventDefault() } var e = t.clientX, o = t.clientY, a = e - d, n = o - f; if ("string" == typeof M.rotateTouch && (0 !== a || 0 !== n) && void 0 === l) { if (a * a + n * n >= 25) { var r = 180 * Math.atan2(Math.abs(n), Math.abs(a)) / Math.PI; l = "scroll-y" === M.rotateTouch ? r > 45 : 90 - r > 45 } !1 === l && (m.classList.add("atropos-rotate-touch"), t.cancelable && t.preventDefault()) } "mouse" !== t.pointerType && l || A(e, o) } }, j = function (t) { if (s = void 0, c = void 0, g.isActive && !(t && "pointerup" === t.type && "mouse" === t.pointerType || t && "pointerleave" === t.type && "mouse" !== t.pointerType)) { if ("string" == typeof M.rotateTouch && l && m.classList.remove("atropos-rotate-touch"), M.alwaysActive) return A(), "function" == typeof M.onRotate && M.onRotate(0, 0), void ("function" == typeof M.onLeave && M.onLeave()); x.push((function () { return m.classList.remove("atropos-active") })), O(r, M.duration + "ms"), b(r, ""), T(r, "translate3d(0,0, 0px)"), u && (O(u, M.duration + "ms"), b(u, "")), p && (O(p, M.duration + "ms"), b(p, ""), T(p, "translate3d(0, 0, 0)"), X(p, 0)), O(n, M.duration + "ms"), b(n, ""), T(n, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"), L({ duration: M.duration + "ms" }), g.isActive = !1, "function" == typeof M.onRotate && M.onRotate(0, 0), "function" == typeof M.onLeave && M.onLeave() } }, D = function (t) { var e = t.target; !y.contains(e) && e !== y && g.isActive && j() }; return g.destroy = function () { g.destroyed = !0, cancelAnimationFrame(v), _(document, "click", D), _(y, "pointerdown", R), _(y, "pointerenter", R), _(y, "pointermove", P), _(y, "touchmove", I), _(y, "pointerleave", j), _(y, "pointerup", j), _(y, "lostpointercapture", j), delete m.__atropos__ }, "string" == typeof m && (m = e(document, m)), m && (m.__atropos__ || (void 0 !== y ? "string" == typeof y && (y = e(document, y)) : y = m, Object.assign(g, { el: m }), n = e(m, ".atropos-rotate"), r = e(m, ".atropos-scale"), i = e(m, ".atropos-inner"), m.__atropos__ = g)), m && y && (M.shadow && ((u = e(m, ".atropos-shadow")) || ((u = document.createElement("span")).classList.add("atropos-shadow"), w = !0), T(u, "translate3d(0,0,-" + M.shadowOffset + "px) scale(" + M.shadowScale + ")"), w && n.appendChild(u)), M.highlight && function () { var t; (p = e(m, ".atropos-highlight")) || ((p = document.createElement("span")).classList.add("atropos-highlight"), t = !0), T(p, "translate3d(0,0,0)"), t && i.appendChild(p) }(), M.rotateTouch && ("string" == typeof M.rotateTouch ? m.classList.add("atropos-rotate-touch-" + M.rotateTouch) : m.classList.add("atropos-rotate-touch")), e(m, "[data-atropos-opacity]") && L({ opacityOnly: !0 }), Y(document, "click", D), Y(y, "pointerdown", R), Y(y, "pointerenter", R), Y(y, "pointermove", P), Y(y, "touchmove", I), Y(y, "pointerleave", j), Y(y, "pointerup", j), Y(y, "lostpointercapture", j), M.alwaysActive && (E(), A())), g } })); /* eslint-enable */
	/* eslint-enable */

	window.Atropos({
		el: '.atropos',
		activeOffset: 120,
		shadowScale: 5
	})

<\/script>

`])), maybeRenderHead($$result));
}, "/Users/paul/Desktop/hoopdex/src/components/MainCard.astro");
var $$Astro$1 = createAstro("/Users/paul/Desktop/hoopdex/src/pages/postlist.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$Postlist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Postlist;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro Neumorphism template" }, { "default": () => renderTemplate`${renderComponent($$result, "MainCard", $$MainCard, {})}` })}`;
}, "/Users/paul/Desktop/hoopdex/src/pages/postlist.astro");
var $$file$1 = "/Users/paul/Desktop/hoopdex/src/pages/postlist.astro";
var $$url$1 = "/postlist";
var _page1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Postlist,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: "Module" }));
var Paul = "/assets/profp.a4091209.jpeg";
var dizzle = "/assets/dizzle.7a715b69.png";
var $$Astro = createAstro("/Users/paul/Desktop/hoopdex/src/pages/aboutme.astro", "https://wpxpaul.github.io/", "file:///Users/paul/Desktop/hoopdex/");
var $$Aboutme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Aboutme;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro Neumorphism template", "lang": "en", "class": "astro-QSBXSCRU" }, { "default": () => renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Horizontal Divs</title><link rel="stylesheet" href="styles.css">` })}

  <!-- Your existing code here -->




  ${maybeRenderHead($$result)}<div class="flex flex-col h-screen astro-QSBXSCRU">
    <!-- Content Container -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between space-y-4 md:space-y-0 p-4 md:p-6 astro-QSBXSCRU">
      <!-- First Div -->
      <div class="flex flex-col items-center space-y-4 shadow-box-up dark:shadow-orange-dark p-4 md:p-6 rounded-xl astro-QSBXSCRU">
        <img class="p-1 w-40 h-100 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 astro-QSBXSCRU"${addAttribute(Paul, "src")} alt="Bordered avatar">
        <div class="dark:text-white astro-QSBXSCRU">
          <div class="mb-4 md:mb-0 font-medium astro-QSBXSCRU">Paul Dubb</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 text-left astro-QSBXSCRU">
            <span class="mb-2 astro-QSBXSCRU">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sapien nec purus interdum finibus. In hac habitasse platea dictumst. Nulla facilisi. Sed nec nunc ut odio congue euismod.
            </span>
            <span class="mb-2 astro-QSBXSCRU">
              Fusce nec lectus vel leo efficitur venenatis nec ac nulla. Vivamus et justo nec elit tincidunt malesuada. Curabitur dapibus, turpis id finibus suscipit, ante mi blandit libero, et dignissim quam odio id risus.
            </span>
            <span class="mb-2 astro-QSBXSCRU">
              Quisque sit amet libero vel neque fringilla tincidunt a nec sem. Sed cursus, libero in vehicula finibus, elit velit ullamcorper tortor, non fermentum est neque ut sapien. Sed congue mi et justo laoreet malesuada. Suspendisse potenti.
            </span>
          
          <!-- Add links using anchor tags -->
          <p class="astro-QSBXSCRU">
            <a href="https://example.com" class="text-blue-500 hover:underline astro-QSBXSCRU">Example Link 1</a>
            <br class="astro-QSBXSCRU">
            <a href="https://example.com" class="text-blue-500 hover:underline astro-QSBXSCRU">Example Link 2</a>
          </p>        
          </div>
        </div>
      </div>

      <div class="hidden md:block w-20 astro-QSBXSCRU"></div>
      
      <!-- Second Div (Copy of the First Div) -->
      <div class="flex flex-col items-center space-y-4 shadow-box-up dark:shadow-orange-dark p-4 md:p-6 rounded-xl astro-QSBXSCRU">
        <img class="p-1 w-40 h-100 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 astro-QSBXSCRU"${addAttribute(dizzle, "src")} alt="Bordered avatar">
        <div class="dark:text-white astro-QSBXSCRU">
          <div class="mb-4 md:mb-0 font-medium astro-QSBXSCRU">Zach Reifschneider</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 text-left astro-QSBXSCRU">
            <span class="mb-2 astro-QSBXSCRU">
              Zach Reifschneider is the creator and lead analyst of Dizzle Dynasty Sports. With over a decade of experience playing fantasy sports like basketball and football, Dizzle Dynasty Sports was created with the intent of helping to expand the dynasty basketball community. Using his passions for writing, content creation, basketball and his current career in marketing, Zach aims to create fun and informative basketball content created for avid players from the perspective of one. Although he considers himself a worldwide basketball fan, he is a lifelong Cleveland Cavaliers fan.
            </span>
          
          <!-- Add links using anchor tags -->
          <p class="astro-QSBXSCRU">
            <a href="https://example.com" class="text-blue-500 hover:underline astro-QSBXSCRU">Example Link 1</a>
            <br class="astro-QSBXSCRU">
            <a href="https://example.com" class="text-blue-500 hover:underline astro-QSBXSCRU">Example Link 2</a>
          </p>        

          
        </div>
      </div>
    </div>
  </div>
</div>`;
}, "/Users/paul/Desktop/hoopdex/src/pages/aboutme.astro");
var $$file = "/Users/paul/Desktop/hoopdex/src/pages/aboutme.astro";
var $$url = "/aboutme";
var _page2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Aboutme,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
var pageMap = /* @__PURE__ */ new Map([["src/pages/index.astro", _page0], ["src/pages/postlist.astro", _page1], ["src/pages/aboutme.astro", _page2]]);
var renderers = [Object.assign({ "name": "astro:jsx", "serverEntrypoint": "astro/jsx/server.js", "jsxImportSource": "astro" }, { ssr: server_default }), Object.assign({ "name": "@astrojs/preact", "clientEntrypoint": "@astrojs/preact/client.js", "serverEntrypoint": "@astrojs/preact/server.js", "jsxImportSource": "preact" }, { ssr: server_default$1 })];
var _manifest = Object.assign(deserializeManifest({ "adapterName": "@astrojs/deno", "routes": [{ "file": "", "links": ["assets/aboutme.13d9a001.css", "assets/index.f3c818a0.css"], "scripts": [], "routeData": { "route": "/", "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/postlist.e9a70a30.css", "assets/aboutme.13d9a001.css"], "scripts": [], "routeData": { "route": "/postlist", "type": "page", "pattern": "^\\/postlist\\/?$", "segments": [[{ "content": "postlist", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/postlist.astro", "pathname": "/postlist", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/aboutme.13d9a001.css", "assets/aboutme.6131586d.css"], "scripts": [], "routeData": { "route": "/aboutme", "type": "page", "pattern": "^\\/aboutme\\/?$", "segments": [[{ "content": "aboutme", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/aboutme.astro", "pathname": "/aboutme", "_meta": { "trailingSlash": "ignore" } } }], "site": "https://wpxpaul.github.io/", "base": "/", "markdown": { "drafts": false, "syntaxHighlight": "shiki", "shikiConfig": { "langs": [], "theme": "github-dark", "wrap": false }, "remarkPlugins": [], "rehypePlugins": [], "remarkRehype": {}, "extendDefaultPlugins": false, "isAstroFlavoredMd": false, "isExperimentalContentCollections": false, "contentDir": "file:///Users/paul/Desktop/hoopdex/src/content/" }, "pageMap": null, "renderers": [], "entryModules": { "\0@astrojs-ssr-virtual-entry": "entry.mjs", "@astrojs/preact/client.js": "client.a83f2be8.js", "/Users/paul/Desktop/hoopdex/node_modules/@preact/signals/dist/signals.module.js": "chunks/signals.module.f64946ba.js", "astro:scripts/before-hydration.js": "" }, "assets": ["/assets/dizzle.7a715b69.png", "/assets/profp.a4091209.jpeg", "/assets/homepagep.f39f251b.png", "/assets/aboutme.6131586d.css", "/assets/aboutme.13d9a001.css", "/assets/index.f3c818a0.css", "/assets/postlist.e9a70a30.css", "/client.a83f2be8.js", "/favicon.ico", "/chunks/client.21d2146f.js", "/chunks/signals.module.f64946ba.js", "/fonts/raleway-v28-latin-200.woff", "/fonts/raleway-v28-latin-200.woff2", "/fonts/raleway-v28-latin-200italic.woff", "/fonts/raleway-v28-latin-200italic.woff2", "/fonts/raleway-v28-latin-300.woff", "/fonts/raleway-v28-latin-300.woff2", "/fonts/raleway-v28-latin-300italic.woff", "/fonts/raleway-v28-latin-300italic.woff2", "/fonts/raleway-v28-latin-500.woff", "/fonts/raleway-v28-latin-500.woff2", "/fonts/raleway-v28-latin-700.woff", "/fonts/raleway-v28-latin-700.woff2", "/fonts/raleway-v28-latin-900.woff", "/fonts/raleway-v28-latin-900.woff2", "/fonts/raleway-v28-latin-regular.woff", "/fonts/raleway-v28-latin-regular.woff2"] }), {
  pageMap,
  renderers
});
var _args = {};
var _exports = createExports(_manifest, _args);
var stop = _exports["stop"];
var handle = _exports["handle"];
var start = _exports["start"];
var running = _exports["running"];
var _start = "start";
if (_start in adapter) {
  adapter[_start](_manifest, _args);
}
export {
  handle,
  pageMap,
  renderers,
  running,
  start,
  stop
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
