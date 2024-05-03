import Name from "./Name";
import List from "./List";

function App() {
  const fruits = [{id: 1, name: "apple", calories : 95}, 
                  {id: 2, name: "orange", calories : 125}, 
                  {id: 3, name: "banana", calories : 35}, 
                  {id: 4, name: "kiwi", calories : 45}, 
                  {id: 5, name: "durian", calories : 55}];

const vegetables = [{id: 6, name: "potatoes", calories : 95}, 
                  {id: 7, name: "celery", calories : 125}, 
                  {id: 8, name: "corrot", calories : 35}, 
                  {id: 9, name: "corn", calories : 45}, 
                  {id: 10, name: "brocolli", calories : 55}];

  return (
    <div className="App">
      {/* <Name name="Mg Wu Kyi" age = {20} isStudent="true"/>
      <Name name="Mg Bone Ngaw" age = {20} isStudent="true"/>
      <Name name="Mg Ye Yint" age = {20}/> */}

      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
      
    </div>
  );
}

export default App;
