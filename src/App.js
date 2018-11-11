import React, { Component } from 'react';
import './App.css';
import registrationDefinition from './registrationDefinition.json';

class App extends Component {

  render() {
    return (
      <form>
        {registrationDefinition.map((field, index) =>
            <label key={index}>
              {field.title}
              {(() => {
                switch(field.type) {
                  case 'text':
                    return <input type="text" name={field.name} />;
                  case 'date':
                    return <input type="date" name={field.name} />;
                  case 'select':
                    return <select>
                        <option value="">Select</option>
                        {field.options.map((choice, index) =>
                          <option key={index} value={choice.value}>{choice.display}</option>
                        )}
                    </select>;
                  case 'multiple':
                    return <div>
                      {field.contacts.map((item, index) =>
                        <label key={index}>
                          {item.display}
                          <input type={field.fieldType} name={item.name} />
                        </label>
                      )}
                    </div>;
                  case 'checkbox':
                    return <input type="checkbox" value={field.name} name={field.title} />;
                  default:
                    return null;
                }
              })()}

            </label>
          )}
      </form>
    );
  }
}

export default App;
