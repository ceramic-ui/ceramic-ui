declare module "dlv" {
  interface Dlv {
    <T>(o: T, k: string | string[]): any;
    <T, V>(o: T, k: string | string[], d: V): V;
  }
  const dlv: Dlv;
  export default dlv;
}
