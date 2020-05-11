import { StyleSheet,Dimensions } from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const _StyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#C8E6C9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C8E6C9",
    marginBottom: 10,
    alignItems: "center",
    width: "90%",
    height:height*0.9,
    justifyContent: 'center'
  },
  questions:{
    flex: 2,
    backgroundColor: "#81C784",
    borderRadius: 10,
    width: "100%",
    height:height*0.2,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems:'center',
    justifyContent: 'center'
    },
    textQuestions:{
       color:"#FFF"     

    },
    quiz:{
        flex: 2,
        backgroundColor: "#81C784",
        borderRadius: 10,
        width: "100%",
        height:height*0.2,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        alignItems:'center',
        justifyContent: 'center'
        },
        textQuiz:{
           color:"#FFF"     
    
        },
        answer:{
            flex: 2,
            backgroundColor: "#CDDC39",
            borderRadius: 10,
            width: "100%",
            height:height*0.2,
            marginRight: 20,
            marginLeft: 20,
            marginTop: 10,
            paddingTop: 20,
            paddingBottom: 20,
            alignItems:'center',
            justifyContent: 'center'
        },
        
        textAnswer:{
               color:"#000"     
        
            },
        quizStart:{
            alignItems:'center',
            justifyContent: 'center'
        },

        questionList:{
          flex: 1,
          backgroundColor: "#CDDC39",
          borderRadius: 10,
          width: "100%",
          height:height*0.2,
          alignItems:'left',
          justifyContent: 'center',
          marginTop: 10,
          paddingTop: 20,
          paddingBottom: 20,
          },
          result:{
            flex: 1,
            backgroundColor: "#69F0AE",
            borderRadius: 10,
            width: "100%",
            height:height*0.1,
            marginTop: 10,
            paddingTop: 20,
            paddingBottom: 20,
            alignItems:'center',
            justifyContent: 'center'
            },
            playagain:{
              flex: 1,
              backgroundColor: "#81C784",
              borderRadius: 10,
              width: "100%",
              height:height*0.1,
              marginRight: 20,
              marginLeft: 20,
              marginTop: 10,
              paddingTop: 20,
              paddingBottom: 20,
              alignItems:'center',
              justifyContent: 'center'
              },
              textQuestions:{
                 color:"#FFF"     
          
              },
              questionsStart:{
                flex: 2,
                
                borderRadius: 10,
                width: "100%",
                height:height*0.2,
                marginRight: 20,
                marginLeft: 20,
                marginTop: 10,
                paddingTop: 20,
                paddingBottom: 20,
                alignItems:'center',
                justifyContent: 'center'
                },
                textQuestions:{
                   color:"#FFF"     
            
                },
        
});

export default _StyleSheet;
