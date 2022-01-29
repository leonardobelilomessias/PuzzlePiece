type GoalProps={
  name:string
  date:string
  createAt:string
  task:string[]
  amountTask:number
  process:string[]
  amountProcess:number
  img:string
}
class Goal{
  _name:string | ''
  _date:string| ''
  _createAt:string | ''
  _task:string[]
  _process:string[]
  _img:string | ''
  constructor({name,date,createAt,task,process,img}:GoalProps){
    this._name = name
    this._date=date
    this._createAt = createAt
    this._task = task
    this._process = process
    this._img =img
  }
}
export {Goal}