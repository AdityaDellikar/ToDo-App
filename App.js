import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView, Modal, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  const [task, setTask] = useState('');
  const [ tasks, setTasks ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ modalVisible, setModalVisible ] = useState(false);

  const addTask = () => {
    if(task.trim() === '') return;
    setLoading(true);
    setTasks([...tasks, task]);
    setTask('');
    setLoading(false);
  };

  const removeTask = (index) => {
    const updatedTask = tasks.filter((_,i) => i !== index);
    setTasks(updatedTask);
  };


  return (
    //<SafeAreProvider>
    <SafeAreaView>
      
      <ScrollView style= {styles.vieww}>
        <View
     style={styles.container}>
      
      <Text style = {styles.header}> What's up dude?!</Text>
      <TextInput style = {styles.input}
      placeholder='Add a new task...'
      placeholderTextColor={"#aaa"}
      value={task}
      onChangeText={setTask}
      ></TextInput>

      <View style={styles.addButtonBox}>
        <Button title='Add' onPress={addTask} color="#fff" ></Button> 
      </View>



      {tasks.map((item, index) => (
        <View key={index} style={styles.taskItem} >
          <Text style={styles.tastText}>{item}</Text>
          <Button title='Delete' onPress={() => removeTask(index)} color="#EF4444" />
        </View>
      ))}

    </View> 
    </ScrollView>
   
    </SafeAreaView>
    //</SafeAreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1F3A',
    padding: 20,
    paddingTop: 60,
  },
  
  header: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#2A2C4A' ,
    color: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
  },

  addButtonBox: {
    backgroundColor:'#f472b6',
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 20,

  },

  taskItem: {
    backgroundColor:'#2A2C4A',
    padding: 15,
    borderRadius: 10,
    marginBottom:10,
  },

  tastText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },

  vieww: {
    backgroundColor: '#1E1F3A'
  }
  
});
