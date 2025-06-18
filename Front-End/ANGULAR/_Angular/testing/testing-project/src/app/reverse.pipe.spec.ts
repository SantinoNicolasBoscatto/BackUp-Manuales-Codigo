import { ReversePipe } from "./reverse.pipe"

describe('Isolated Test for Pipe', () => {
    it('Reverse string', () => {
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh')
    })
})