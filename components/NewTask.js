import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native"

function NewTask (props) {
    const [task, setTask] = useState('');

    function taskInputHandler (task) {
        setTask(task);
    };
    
    function addTaskHandler() {
        props.onAddNewTask(task);
        setTask('');
        props.cancelModal();
    }
    
    return(
        <Modal animationType='slide' visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your task..'
                    onChangeText={taskInputHandler} 
                    value={task}/>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Task" onPress={addTaskHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.cancelModal}/>
                    </View>
                </View>
            </View>
        </Modal>
    )

}

export default NewTask;

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      padding: 16,
      borderBottomColor: '#ccc',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      width: '100%',
      padding: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
  });