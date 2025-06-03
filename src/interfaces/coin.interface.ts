export default interface ICoin {
    fetchData(): Promise<number | undefined>;
}