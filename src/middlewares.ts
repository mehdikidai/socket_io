import bodyParser from "body-parser"


const middlewareJson = bodyParser.json()
const middlewareUrlencoded = bodyParser.urlencoded({ extended: false })


export { middlewareJson,middlewareUrlencoded }