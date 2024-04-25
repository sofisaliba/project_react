import React, { useState } from 'react';
import styles from './listofwords.module.css'; // Подключаем файл стилей

function MyForm() {
    // Состояния для хранения значений input и введенных значений
    const [inputValues, setInputValues] = useState(['', '', '']);
    const [submittedValues, setSubmittedValues] = useState([]);
  
    // Состояния для редактирования значений в таблице
    const [editIndex, setEditIndex] = useState(null); // Индекс элемента для редактирования
    const [editValues, setEditValues] = useState(['', '', '']); // Значения для редактирования
  
    // Обработчики изменения input
    const handleInputChange = (index, event) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = event.target.value;
      setInputValues(newInputValues);
    };
  
    // Обработчик клика по кнопке "Отправить"
    const handleSubmit = () => {
      // Если редактируется элемент, обновляем его
      if (editIndex !== null) {
        const updatedValues = [...submittedValues];
        updatedValues[editIndex] = [...editValues];
        setSubmittedValues(updatedValues);
        setEditIndex(null); // Сбрасываем индекс редактируемого элемента
      } else {
        // Добавляем введенные значения в массив
        setSubmittedValues([...submittedValues, [...inputValues]]);
      }
  
      // Сбрасываем значения input
      setInputValues(['', '', '']);
      setEditValues(['', '', '']);
    };
  
    // Обработчик клика по кнопке "Удалить"
    const handleDelete = (index) => {
      const updatedValues = [...submittedValues];
      updatedValues.splice(index, 1);
      setSubmittedValues(updatedValues);
    };
  
    // Обработчик клика по кнопке "Изменить"
    const handleEdit = (index, values) => {
      // Устанавливаем индекс редактируемого элемента и текущие значения
      setEditIndex(index);
      setEditValues([...values]);
    };
  
    // Обработчик изменения значения при редактировании
    const handleEditInputChange = (index, event) => {
      const newEditValues = [...editValues];
      newEditValues[index] = event.target.value;
      setEditValues(newEditValues);
    };
  
    return (
      <div className={styles.container}>
        {/* Три input в строчку */}
        <div className={styles.row}>
          {inputValues.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Enter"
              className={styles.input}
            />
          ))}
          <div className={styles.space}></div>
          <button onClick={handleSubmit} className={styles.submitBtn}>{editIndex !== null ? 'Edit' : 'Add'}</button>
        </div>
  
        {/* Вывод введенных значений на страницу */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Word</th>
              <th>Transcription</th>
              <th>Translation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {submittedValues.map((values, index) => (
              <tr key={index}>
                {values.map((value, i) => (
                  <td key={i}>
                    {/* Проверяем, редактируется ли элемент */}
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editValues[i]}
                        onChange={(event) => handleEditInputChange(i, event)}
                        className={styles.input}
                      />
                    ) : (
                      value
                    )}
                  </td>
                ))}
                <td className={styles.actions}>
                  {/* Проверяем, редактируется ли элемент */}
                  {editIndex === index ? (
                    <button onClick={() => handleSubmit()} className={styles.editBtn}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(index, values)} className={styles.editBtn}>Edit</button>
                  )}
                  <div className={styles.space}></div>
                  <button onClick={() => handleDelete(index)} className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default MyForm;