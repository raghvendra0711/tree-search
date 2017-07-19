import delay from './delay';

const treeData = {
  search: '',
  tree: [
    {
      "node": {
        "id": '1',
        "description": 'test1',
        "children": [
          {
            "node": {
              id:'1_1',
              "description": 'test1_1',
              "children": [
                {
                  "node": {
                    id: '1_1_1',
                    "description": 'test1_1_1',
                    "children": []
                  }
                }
              ]
            }
          },
          {
            "node": {
              id:'1_2',
              "description": 'test1_2',
              "children": []
            }
          },
          {
            "node": {
              id:'1_3',
              "description": 'test1_3',
              "children": []
            }
          }
        ]
      }
    },
    {
      "node": {
        "id": '2',
        "description": 'test2',
        "children": [
          {
            "node": {
              id:'2_1',
              "description": 'test2_1',
              "children": [
                {
                  "node": {
                    id: '2_1_1',
                    "description": 'test2_1_1',
                    "children": []
                  }
                }
              ]
            }
          },
          {
            "node": {
              id:'2_2',
              "description": 'test2_2',
              "children": []
            }
          },
          {
            "node": {
              id:'2_3',
              "description": 'test2_3',
              "children": []
            }
          }
        ]
      }
    }
  ]
};


export default treeData;
