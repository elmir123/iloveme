import { gql } from '@apollo/client';


export const GET_USER = gql`
  {
    me {
      _id
      username
      email
      moods {
        description
        rating
        date
      }
      habits{
        name
        rating
        date
      }
    }
  }
`

export const QUERY_MOOD = gql`
query moodByDateById($date:String, $id:String){
  moodByDateById(date:$date, id:$id){
    moods{
      rating
    }
  } 
}
`;

export const QUERY_ALL_HABITS_BY_ID = gql`
query getHabitsById($id:String){
  getHabitsById(id:$id){
    habits{
      name
    }
  }
}
`;

export const QUERY_ALL_HABITS = gql`
query getHabits{
  getHabits{
    habits{
      name
    }
  }
}
`
