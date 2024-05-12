/*
    - Native iOS - example
    - created by Sudheesh P S
*/
import Foundation
import React

@objc(HelloWorld)
class HelloWorld: NSObject {
    @objc
    func helloWorld() {
        print("hey i'm called from react native")
    }

    @objc(addTwoNumbers: withB:resolver:rejecter:)
    func addTwoNumbers(a: Int, b: Int, resolver:RCTPromiseResolveBlock, rejecter: RCTPromiseRejectBlock) {
        let result = a + b
        print("Result: \(result)")

        if (result >= 0) {
            resolver(result)
        } else {
            rejecter("ERR_NEGATIVE_RESULT","The result is negative", nil)
        }
       
    }
}