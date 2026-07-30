export interface CourseState {

  courses: any[];

  loading: boolean;

  error: string | null;

}

export const initialState: CourseState = {

  courses: [],

  loading: false,

  error: null

};