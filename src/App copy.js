import './App.css';
import Header from './view/Components/Header';
// import Card from './view/Components/Card';
// import ApiSaveData from './view/Components/ApiSaveData';
// import EmailTemplate from './view/Components/EmailTemplate';
import GogooleTranslator from './view/Components/GoogleTranslator.jsx'
function App() {
  return (
    <>
       <div className="maincon">
            <Header />
            {/* <Card /> */}
            {/* <ApiSaveData /> */}
            {/* <EmailTemplate /> */}
            <GogooleTranslator />
       </div>
    </>
  );
}

export default App;
