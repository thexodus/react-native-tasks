import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Modal } from 'react-native';

import NewTask from './components/NewTask';
import TaskItem from './components/TaskItem';

export default function App() {

  const [tasks, setTasks] = useState([]);
  
  const [modalVisible, setModalVisible] = useState(false);

  function addNewTaskHandler (task) {
    setTasks((currentTasks) => [
    ...currentTasks,
    { text: task, id: Math.random().toString() },
    ]);
  };

  function displayModal () {
    setModalVisible(true);
  };

  function closeModal() {
    setModalVisible(false);
  }

  function deleteTaskHandler (id) {
    setTasks((currentTasks) => {
      return currentTasks.filter(task => task.id !== id );
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title='New Task +' onPress={displayModal} />
      <NewTask 
        onAddNewTask={addNewTaskHandler} 
        cancelModal={closeModal} 
        visible={modalVisible} />
      <View style={styles.tasksContainer}>
        <FlatList data={tasks} renderItem={itemData => {
          return <TaskItem text={itemData.item.text} onDeleteTask={deleteTaskHandler} id={itemData.item.id}/>
        }} 
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tasksContainer: {
    flex: 4,
  },
});
