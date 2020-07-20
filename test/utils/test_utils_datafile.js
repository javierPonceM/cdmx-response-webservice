var assert = require('assert');
const path = require("path");
const dataFile = require(path.join(__dirname, '../../src/app/utils/dataFile'));
const utilStatistics = require(path.join(__dirname, '../../src/app/modules/utilStatistics'));

describe("Persist Data File", () => {
  let data = [];
  let opt = {};
  let paylodad = {};
  before(() => {
    data.push({
      "util": "si",
      "date": new Date(),
      "falla": 23
    })
    data.push({
      "util": "No",
      "date": new Date(),
      "falla": 24
    })
    opt.sep = "|";
    opt.ext = "txt";
    payload = {
      name: '/message',
      return_code: 200,
      path: '/api/message',
      query_string: '{}',
      url_params: '{}',
      request: {
        input: {
          text: ''
        },
        context:  {
            workspace_id: 'b8c5da2a-26dd-4477-a58b-87b58fe6a75f',
            conversation_id: 'a105bc7a-d887-4459-8d4e-dc8807698ed6',
            system: [],
            contexto: 'global',
            contadorEjec: 0,
            contadorGen1: 0,
            contadorGen2: 0,
            contadorFalla2:2,
            util: 'util'

          },
        workspace_id: 'b8c5da2a-26dd-4477-a58b-87b58fe6a75f'
      },
      response: {
        intents: [],
        entities: [],
        input: {
          text: ''
        },
        output: {
          generic: [],
          text: [],
          nodes_visited: [],
          log_messages: []
        },
        context: {
          workspace_id: 'b8c5da2a-26dd-4477-a58b-87b58fe6a75f',
          conversation_id: 'a105bc7a-d887-4459-8d4e-dc8807698ed6',
          system: [],
          contexto: 'global',
          contadorEjec: 0,
          contadorGen1: 0,
          contadorGen2: 0,
          contadorFalla2:2,
          util: 'util'

        }
      },
      date: '2018-11-20T11:19:28-06:00'
    }

  })

  it("#createFile", (done) => {
    let op = dataFile.createFile(data, opt);
    assert(op);
    done()
  })

  it("#utilstatistics", (done) => {
    let op2 = utilStatistics.fileStatics(payload);
    assert(op2);
    done()
  })

})
