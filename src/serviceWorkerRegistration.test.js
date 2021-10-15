const rewire = require("rewire")
const serviceWorkerRegistration = rewire("./serviceWorkerRegistration")
const registerValidSW = serviceWorkerRegistration.__get__("registerValidSW")
const checkValidServiceWorker = serviceWorkerRegistration.__get__("checkValidServiceWorker")
// @ponicode
describe("serviceWorkerRegistration.register", () => {
    test("0", () => {
        let callFunction = () => {
            serviceWorkerRegistration.register("XCode")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            serviceWorkerRegistration.register("arizona_extend.wav")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            serviceWorkerRegistration.register("bus_account.mpe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            serviceWorkerRegistration.register("png.mpg4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            serviceWorkerRegistration.register("services_recontextualize_front_end.gif")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            serviceWorkerRegistration.register(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("registerValidSW", () => {
    test("0", () => {
        let callFunction = () => {
            registerValidSW("http://www.croplands.org/account/confirm?t=", { onSuccess: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            registerValidSW("https://accounts.google.com/o/oauth2/revoke?token=%s", { onSuccess: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            registerValidSW("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", { onSuccess: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            registerValidSW("https://api.telegram.org/", { onSuccess: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            registerValidSW("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", { onSuccess: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            registerValidSW(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("checkValidServiceWorker", () => {
    test("0", () => {
        let callFunction = () => {
            checkValidServiceWorker("www.google.com", "XCode")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            checkValidServiceWorker("http://base.com", "services_recontextualize_front_end.gif")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            checkValidServiceWorker("ponicode.com", "Safari")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            checkValidServiceWorker("Www.GooGle.com", "services_recontextualize_front_end.gif")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            checkValidServiceWorker("Www.GooGle.com", "png.mpg4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            checkValidServiceWorker(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("serviceWorkerRegistration.unregister", () => {
    test("0", () => {
        let callFunction = () => {
            serviceWorkerRegistration.unregister()
        }
    
        expect(callFunction).not.toThrow()
    })
})
