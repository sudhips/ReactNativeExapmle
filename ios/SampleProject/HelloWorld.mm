/*
    - Native iOS - example
    - created by Sudheesh P S
*/

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(HelloWorld, NSObject)
    RCT_EXTERN_METHOD(helloWorld)
    RCT_EXTERN_METHOD(addTwoNumbers: (NSInteger)a withB:(NSInteger)b resolver:(RCTPromiseResolveBlock)resolver rejecter: (RCTPromiseRejectBlock)rejecter)
@end