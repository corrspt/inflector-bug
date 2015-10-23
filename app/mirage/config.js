export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */
this.get('/api/gases', function() {
  return {
  'data': [
    {
      'type': 'gases',
      'id': '2',
      'attributes': {
        'symbol': 'Comboda',
        'composition': 'Compo'
      },
      'relationships': {
        'code': {
          'links': {
            'self': 'http://localhost:9000/api/gases/2/relationships/code',
            'related': 'http://localhost:9000/api/gases/2/code'
          },
          'data': {
            'type': 'industry-codes',
            'id': '17'
          }
        },
        'specification': {
          'links': {
            'self': 'http://localhost:9000/api/gases/2/relationships/specification',
            'related': 'http://localhost:9000/api/gases/2/specification'
          },
          'data': {
            'type': 'gas-specifications',
            'id': '3'
          }
        }
      },
      'links': {
        'self': 'http://localhost:9000/api/gases/2'
      }
    },
    {
      'type': 'gases',
      'id': '1',
      'attributes': {
        'symbol': 'Symbol',
        'composition': 'Teste'
      },
      'relationships': {
        'code': {
          'links': {
            'self': 'http://localhost:9000/api/gases/1/relationships/code',
            'related': 'http://localhost:9000/api/gases/1/code'
          },
          'data': {
            'type': 'industry-codes',
            'id': '8'
          }
        },
        'specification': {
          'links': {
            'self': 'http://localhost:9000/api/gases/1/relationships/specification',
            'related': 'http://localhost:9000/api/gases/1/specification'
          },
          'data': {
            'type': 'gas-specifications',
            'id': '1'
          }
        }
      },
      'links': {
        'self': 'http://localhost:9000/api/gases/1'
      }
    }
  ],
  'included': [
    {
      'type': 'gas-specifications',
      'id': '1',
      'attributes': {
        'specification': 'MATATA'
      },
      'relationships': {},
      'links': {
        'self': 'http://localhost:9000/api/gas-specifications/1'
      }
    },
    {
      'type': 'gas-specifications',
      'id': '3',
      'attributes': {
        'specification': 'BODING'
      },
      'relationships': {},
      'links': {
        'self': 'http://localhost:9000/api/gas-specifications/3'
      }
    },
    {
      'type': 'industry-codes',
      'id': '17',
      'attributes': {
        'code': 'A',
        'region': 'A'
      },
      'relationships': {},
      'links': {
        'self': 'http://localhost:9000/api/industry-codes/17'
      }
    },
    {
      'type': 'industry-codes',
      'id': '8',
      'attributes': {
        'code': 'ISO',
        'region': 'ISO'
      },
      'relationships': {},
      'links': {
        'self': 'http://localhost:9000/api/industry-codes/8'
      }
    }
  ],
  'meta': {
    'records': 2
  }
};
});

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
