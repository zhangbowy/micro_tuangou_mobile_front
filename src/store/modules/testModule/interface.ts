// shape里面的必须是{id:number类型，quantity：number类型}
export interface Shape {
  id: number;
  quantity: number;
}
// 定义state格式，返回格式
export interface State {
  name: String;
  list: Shape[];
}
