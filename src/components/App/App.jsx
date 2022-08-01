import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const elements = useSelector(store => store.elementList)
  const [newElement, setNewElement] = useState('');
  const exercisesArray = [];
  // const [items, setItems] = useState([])
  // const [newExercise, setNewExercises] = useState('');
  // const getElements = () => {
  //   axios.get('/api/element').then(response => {
  //     dispatch({ type: 'SET_ELEMENTS', payload: response.data });
  //   })
  //     .catch(error => {
  //       console.log('error with element get request', error);
  //     });
  // }

  useEffect(() => {
    // getElements();
    dispatch({ type: 'FETCH_ELEMENTS' });

  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((res) => res.json())
  //   .then((resJson) => {
  //     const data = JSON.parse(resJson)
  //     setItems(data)
  // })

  }, []);

  const addElement = () => {
    dispatch({ type: 'ADD_ELEMENT', payload: { name: newElement}});
    setNewElement('');
    // axios.post('/api/element', { 
    //   name: newElement
    // })
    //   .then(() => {
    //     // getElements();
    //     dispatch({ type: 'FETCH_ELEMENTS'});
    //     setNewElement('');
    //   })
    //   .catch(error => {
    //     console.log('error with element get request', error);
    //   });

  }

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/abs',
    headers: {
      'X-RapidAPI-Key': '2c0cff374emshc5184dba513d7cap1d4885jsn9f17399308b5',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log('Response.data:', response.data);
    const exercisesArray = response.data;
    // const exercisesArray = JSON.parse(JSON.stringify(response.data));
    console.log ('ExercisesArray:', exercisesArray)
    
  }).catch(function (error) {
    console.error(error);
  });

  // const exercisesArray = JSON.parse(exercises);
  console.log('ExercisesArray.name:', exercisesArray.name);
  console.log('ExercisesArray[1].girUrl:', exercisesArray[1].gifUrl);
  // console.log('Exercises[2]:', exercisesArray.num[2].target);
  // console.log('Exercises[3]:', exercisesArray.data[3].equipment);

  // for (let i = 0; i < myObj.name.length; i++) {
  //   x += myObj.name[i];
  // }

//   String json="" // place your json format here in double Quotes with proper escapes .......
//   jObject = new JSONObject(json.trim());
//   Iterator<?> keys = jObject.keys();

//   while( keys.hasNext() ) {
//     String key = (String)keys.next();
//     if ( jObject.get(key) instanceof JSONObject ) {
//          // do what ever you want with the JSONObject.....
//     }
// }

// Iterator<String> keys= object.keys();
// while (keys.hasNext()) 
// {
//         String keyValue = (String)keys.next();
//         String valueString = object.getString(keyValue);
// }

  return (
    <div>
      <h1>Atomic Elements</h1>

      <ul>
        {elements.map(element => (
          <li key={element}>
            {element}
          </li>
        ))}
      </ul>

      <input
        value={newElement} 
        onChange={evt => setNewElement(evt.target.value)} 
      />
      <button onClick={addElement}>Add Element</button>
      {/* {
        items.map((item) => <SubComponent key={item.id} title={item.title} />)
      } */}
      {/* if let bodyPart = json["bodyPart"] as? [String:Any] {
        print(htmlData) */}
      {/* } */}
    
      <div>    
        <ul>
          {exercisesArray.map(item => {
            return  <li>{item.name}
                      <img src={item.gifUrl} alt={item.name} />
                    </li>
          })}
        </ul>
      </div>
    </div>
  );
}


export default App;
