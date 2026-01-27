/*
  javascript execution context 

  {}=  first gloal execution context 
      and second one is functional execution context 
      in mongoose eval execution context is the third one 


      {}
      runs in tow phases - memory creation phase second is -execution phase 


  1. global environment /execution  yeh allocate hota hai this ke ander
  2. Memory creation phase 
     take all varibles and each value is undefined , in function declaration is assigned 
  3.execution phase 
     put value in the variables 
     if a variable has a function then firstly a new environemnt is built +execution thread  again 1-3 steps are done for this thead and thread is deleted after processing 
     
      


*/