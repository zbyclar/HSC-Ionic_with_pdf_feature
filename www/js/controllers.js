angular.module('starter.controllers', ['ngCordova','ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/calculator.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

    $scope.localStorageArray = {
        id:   [0, 1],
        value: []

    };

/*
    $scope.saveLocalStorage = function() {
      console.log("Saved local storage");
      window.localStorage['previousCalculations'] = JSON.stringify($scope.localStorageArray);
    };

    $scope.loadLocalStorage = function() {
      console.log("Loaded local storage");
      $scope.localStorageArray = JSON.parse(window.localStorage['previousCalculations'] || '{ id: [], value: []}');
    };
*/

})

.controller('SettingsCtrl', function($scope) {

})

.controller('PastCalculationsCtrl', function($scope) {
            
            var dd = {
            content: [
                      'First paragraph',
                      'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
                      ]
            }
            var data;
            //pdfMake.createPdf(dd).open('sample.pdf');
            $scope.sendPDF =function(){

            window.plugin.email.open({
                to:          ["test@com.cn"], // email addresses for TO field
                //cc:          null, // email addresses for CC field
                //bcc:         null, // email addresses for BCC field
                attachments:  "base64:new.pdf//JVBERi0xLjMKJf////8KNiAwIG9iago8PAovVHlwZSAvRXh0R1N0YXRlCi9jYSAxCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL01lZGlhQm94IFswIDAgNTk1LjI4IDg0MS44OV0KL0NvbnRlbnRzIDMgMCBSCi9SZXNvdXJjZXMgNCAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCi9FeHRHU3RhdGUgPDwKL0dzMSA2IDAgUgo+PgovRm9udCA8PAovRjEgNyAwIFIKPj4KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL0xlbmd0aCAyNjQwCj4+CnN0cmVhbQoxIDAgMCAtMSAwIDg0MS44OSBjbQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAo0MCA3OTAuNzU0IFRkCi9GMSAxMiBUZgo8MjEyMjIzMjQyNTI2PiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjY3LjE4MTY0MDYyNSA3OTAuNzU0IFRkCi9GMSAxMiBUZgo8MjcyODIzMjgyOTIzMjgyNzJhPiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjQwIDc3Ni42OSBUZAovRjEgMTIgVGYKPDJiMmMyZDI1MmEyZTIzMjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKODUuNjIxMDkzNzUgNzc2LjY5IFRkCi9GMSAxMiBUZgo8MjcyODIzMjgyOTIzMjgyNzJhMmYyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAoxNDYuMjI0NjA5Mzc1IDc3Ni42OSBUZAovRjEgMTIgVGYKPDI1MmEyMjI0MjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKMTY5LjA0MTAxNTYyNSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwyNTIyMzAyZTI2PiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjE5NS42NDI1NzgxMjUgNzc2LjY5IFRkCi9GMSAxMiBUZgo8MjgyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAoyMDUuMTg3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwzMTIyMjUyNTMxMmUyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAoyMzEuMDUwNzgxMjUgNzc2LjY5IFRkCi9GMSAxMiBUZgo8MzIyMjI1MjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKMjQ3LjYxNTIzNDM3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwzMTJkMmMyOTJlMjMyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAoyODQuNDU4OTg0Mzc1IDc3Ni42OSBUZAovRjEgMTIgVGYKPDI1MmQyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAoyOTguMDQ2ODc1IDc3Ni42OSBUZAovRjEgMTIgVGYKPDMwMjgzMzJlMjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKMzMwLjUzNzEwOTM3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwyNDM0MjMyZTJmMjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKMzU5LjQxNzk2ODc1IDc3Ni42OSBUZAovRjEgMTIgVGYKPDI1MmEyMjI0MjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKMzgyLjIzNDM3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwzMTIyMmMyZTI2PiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjQwNC4yNzczNDM3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwzNTIyMzEzMTI2PiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjQyNS4yNTk3NjU2MjUgNzc2LjY5IFRkCi9GMSAxMiBUZgo8MzIyZTI2PiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjQ0MS4zNDk2MDkzNzUgNzc2LjY5IFRkCi9GMSAxMiBUZgo8MzYyMjM3MjIzNjJlMzYyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAo0ODIuOTk4MDQ2ODc1IDc3Ni42OSBUZAovRjEgMTIgVGYKPDIyMmMyNTJkMjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKNTA2LjM1OTM3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwyODI1MjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKNTE5LjcyNDYwOTM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8MDA3Mj4KPDI0PjwwMDczPgo8MjU+PDAwNzQ+CjwyNj48MDAyMD4KPDI3PjwwMDcwPgo8Mjg+PDAwNjE+CjwyOT48MDA2Nz4KPDJhPjwwMDY4Pgo8MmI+PDAwNDE+CjwyYz48MDA2ZT4KPDJkPjwwMDZmPgo8MmU+PDAwNjU+CjwyZj48MDAyYz4KPDMwPjwwMDZkPgo8MzE+PDAwNmM+CjwzMj48MDA2Mj4KPDMzPjwwMDZiPgo8MzQ+PDAwNzU+CjwzNT48MDA3Nz4KPDM2PjwwMDY0Pgo8Mzc+PDAwNzY+CmVuZGJmY2hhcgplbmRjbWFwCkNNYXBOYW1lIGN1cnJlbnRkaWN0IC9DTWFwIGRlZmluZXJlc291cmNlIHBvcAplbmQKZW5kCgplbmRzdHJlYW0KZW5kb2JqCjcgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0Jhc2VGb250IC9BQUFBQUErUm9ib3RvLVJlZ3VsYXIKL1N1YnR5cGUgL1RydWVUeXBlCi9Gb250RGVzY3JpcHRvciAxMCAwIFIKL0ZpcnN0Q2hhciAzMwovTGFzdENoYXIgNTUKL1dpZHRocyBbNTgyIDI0OCAzNDkgNTIxIDMxOCAyNDggNTY2IDU0OCA1NjYgNTY2IDY2MSA1NjYgNTY2IDUyNyAxOTYgODc2IDI0OCA1NjYgNTA5IDU2NiA3NTcgNTY2IDUwMV0KL0VuY29kaW5nIC9NYWNSb21hbkVuY29kaW5nCi9Ub1VuaWNvZGUgMTEgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAxIDAgUgo+PgplbmRvYmoKMSAwIG9iago8PAovVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzUgMCBSXQo+PgplbmRvYmoKeHJlZgowIDEyCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwNzg0NSAwMDAwMCBuIAowMDAwMDA3Nzk2IDAwMDAwIG4gCjAwMDAwMDAyODYgMDAwMDAgbiAKMDAwMDAwMDE2OSAwMDAwMCBuIAowMDAwMDAwMDU5IDAwMDAwIG4gCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwNzUxMyAwMDAwMCBuIAowMDAwMDAyOTc4IDAwMDAwIG4gCjAwMDAwMDMwNzIgMDAwMDAgbiAKMDAwMDAwNjY2NiAwMDAwMCBuIAowMDAwMDA2ODgyIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgMTIKL1Jvb3QgMiAwIFIKL0luZm8gOCAwIFIKPj4Kc3RhcnR4cmVmCjc5MDIKJSVFT0YK", // file paths or base64 data streams
                subject:    "Just some images", // subject of the email
                body:       "hi", // email body (for HTML, set isHtml to true)
                isHtml:    true, // indicats if the body is HTML or plain text
                }, function () {
                console.log('email view dismissed');
                },
                this);
            }
            $scope.openPDF = function(){
            //pdfMake.createPdf(dd).open('sample.pdf');
            pdfMake.createPdf(dd).getBase64(function(encodedString)
            {data = encodedString;});
             console.log(data);
            window.open('data:application/pdf;base64,JVBERi0xLjMKJf////8KNiAwIG9iago8PAovVHlwZSAvRXh0R1N0YXRlCi9jYSAxCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL01lZGlhQm94IFswIDAgNTk1LjI4IDg0MS44OV0KL0NvbnRlbnRzIDMgMCBSCi9SZXNvdXJjZXMgNCAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCi9FeHRHU3RhdGUgPDwKL0dzMSA2IDAgUgo+PgovRm9udCA8PAovRjEgNyAwIFIKPj4KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL0xlbmd0aCAyNjQwCj4+CnN0cmVhbQoxIDAgMCAtMSAwIDg0MS44OSBjbQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAo0MCA3OTAuNzU0IFRkCi9GMSAxMiBUZgo8MjEyMjIzMjQyNTI2PiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjY3LjE4MTY0MDYyNSA3OTAuNzU0IFRkCi9GMSAxMiBUZgo8MjcyODIzMjgyOTIzMjgyNzJhPiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjQwIDc3Ni42OSBUZAovRjEgMTIgVGYKPDJiMmMyZDI1MmEyZTIzMjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKODUuNjIxMDkzNzUgNzc2LjY5IFRkCi9GMSAxMiBUZgo8MjcyODIzMjgyOTIzMjgyNzJhMmYyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAoxNDYuMjI0NjA5Mzc1IDc3Ni42OSBUZAovRjEgMTIgVGYKPDI1MmEyMjI0MjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKMTY5LjA0MTAxNTYyNSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwyNTIyMzAyZTI2PiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjE5NS42NDI1NzgxMjUgNzc2LjY5IFRkCi9GMSAxMiBUZgo8MjgyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAoyMDUuMTg3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwzMTIyMjUyNTMxMmUyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAoyMzEuMDUwNzgxMjUgNzc2LjY5IFRkCi9GMSAxMiBUZgo8MzIyMjI1MjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKMjQ3LjYxNTIzNDM3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwzMTJkMmMyOTJlMjMyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAoyODQuNDU4OTg0Mzc1IDc3Ni42OSBUZAovRjEgMTIgVGYKPDI1MmQyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAoyOTguMDQ2ODc1IDc3Ni42OSBUZAovRjEgMTIgVGYKPDMwMjgzMzJlMjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKMzMwLjUzNzEwOTM3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwyNDM0MjMyZTJmMjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKMzU5LjQxNzk2ODc1IDc3Ni42OSBUZAovRjEgMTIgVGYKPDI1MmEyMjI0MjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKMzgyLjIzNDM3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwzMTIyMmMyZTI2PiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjQwNC4yNzczNDM3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwzNTIyMzEzMTI2PiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjQyNS4yNTk3NjU2MjUgNzc2LjY5IFRkCi9GMSAxMiBUZgo8MzIyZTI2PiBUagpFVApRCi9EZXZpY2VSR0IgY3MKMCAwIDAgc2NuCi9HczEgZ3MKZgpxCjEgMCAwIC0xIDAgODQxLjg5IGNtCkJUCjQ0MS4zNDk2MDkzNzUgNzc2LjY5IFRkCi9GMSAxMiBUZgo8MzYyMjM3MjIzNjJlMzYyNj4gVGoKRVQKUQovRGV2aWNlUkdCIGNzCjAgMCAwIHNjbgovR3MxIGdzCmYKcQoxIDAgMCAtMSAwIDg0MS44OSBjbQpCVAo0ODIuOTk4MDQ2ODc1IDc3Ni42OSBUZAovRjEgMTIgVGYKPDIyMmMyNTJkMjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKNTA2LjM1OTM3NSA3NzYuNjkgVGQKL0YxIDEyIFRmCjwyODI1MjY+IFRqCkVUClEKL0RldmljZVJHQiBjcwowIDAgMCBzY24KL0dzMSBncwpmCnEKMSAwIDAgLTEgMCA4NDEuODkgY20KQlQKNTE5LjcyNDYwOTM3NSA3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Mj4KPDI0PjwwMDczPgo8MjU+PDAwNzQ+CjwyNj48MDAyMD4KPDI3PjwwMDcwPgo8Mjg+PDAwNjE+CjwyOT48MDA2Nz4KPDJhPjwwMDY4Pgo8MmI+PDAwNDE+CjwyYz48MDA2ZT4KPDJkPjwwMDZmPgo8MmU+PDAwNjU+CjwyZj48MDAyYz4KPDMwPjwwMDZkPgo8MzE+PDAwNmM+CjwzMj48MDA2Mj4KPDMzPjwwMDZiPgo8MzQ+PDAwNzU+CjwzNT48MDA3Nz4KPDM2PjwwMDY0Pgo8Mzc+PDAwNzY+CmVuZGJmY2hhcgplbmRjbWFwCkNNYXBOYW1lIGN1cnJlbnRkaWN0IC9DTWFwIGRlZmluZXJlc291cmNlIHBvcAplbmQKZW5kCgplbmRzdHJlYW0KZW5kb2JqCjcgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0Jhc2VGb250IC9BQUFBQUIrUm9ib3RvLVJlZ3VsYXIKL1N1YnR5cGUgL1RydWVUeXBlCi9Gb250RGVzY3JpcHRvciAxMCAwIFIKL0ZpcnN0Q2hhciAzMwovTGFzdENoYXIgNTUKL1dpZHRocyBbNTgyIDI0OCAzNDkgNTIxIDMxOCAyNDggNTY2IDU0OCA1NjYgNTY2IDY2MSA1NjYgNTY2IDUyNyAxOTYgODc2IDI0OCA1NjYgNTA5IDU2NiA3NTcgNTY2IDUwMV0KL0VuY29kaW5nIC9NYWNSb21hbkVuY29kaW5nCi9Ub1VuaWNvZGUgMTEgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAxIDAgUgo+PgplbmRvYmoKMSAwIG9iago8PAovVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzUgMCBSXQo+PgplbmRvYmoKeHJlZgowIDEyCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwNzg0NSAwMDAwMCBuIAowMDAwMDA3Nzk2IDAwMDAwIG4gCjAwMDAwMDAyODYgMDAwMDAgbiAKMDAwMDAwMDE2OSAwMDAwMCBuIAowMDAwMDAwMDU5IDAwMDAwIG4gCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwNzUxMyAwMDAwMCBuIAowMDAwMDAyOTc4IDAwMDAwIG4gCjAwMDAwMDMwNzIgMDAwMDAgbiAKMDAwMDAwNjY2NiAwMDAwMCBuIAowMDAwMDA2ODgyIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgMTIKL1Jvb3QgMiAwIFIKL0luZm8gOCAwIFIKPj4Kc3RhcnR4cmVmCjc5MDIKJSVFT0YK','_blank','location=yes');
            return false;
            };
/*

    $scope.loadLocalStorage();
    $scope.calculation_storage = $scope.localStorageArray.value;
*/

})

//.controller('InterviewCtrl', function($scope, $stateParams) {
//  $scope.title = "Mr.Smith";
//  $scope.subtitle = "Interview";
//})

.controller('CalculatorCtrl', function($scope) {
    // Bound to the output display, if there is no local storage value, it outputs 0 automatically


    //First button choice
    var inputStr = ""; //this is to collect user input and store it as string and then convert to number
    var inputNN = 0.0; //non assigned input
    var multiplier = 0.0; //to multiply numbers to get the right value

    var totalAmount = 0.0; //this will be result that is shown when pressing equals
    //SHOULD USE SEPARATELY totalDecAmount for calculations
    var totalDecAmount = 0.0; //this is total amount for Decimal number


    //need to change these
    var previousNumber = 0.0;
    var currentNumber = 0.0;

    var previousTotal = 0.0; //this is total amount of previous action
    var storeOperator = "";
    var result = 0;

    var inputType = 0; //0 for decimal, 1 for pound, 2 for shilling, 3 for pence
    var inputSubType = 0;

    //Initialize previous input, otherwise shows undefined
    $scope.output = "0";
    $scope.previousInput="";

    //each button will have its own types, type0 is default - decimal
    var choice = {
      type0 : 1,   //default value for decimal input

      type1 : 240, //1 pound
      type4 : 252, //1 pound 1 shilling

      type2 : 12, //1 shilling
      type5 : 60, //5 shillings
      type6 : 30, //2 shillings 6 pence
      type7 : 24, //2 shillings

      type3  : 1,  //1 pence
      type8  : 6,  //6 pence
      type9  : 3,  //3 pence
      type10 : 2,  //2 pence
      type11 : 0.5, //half pence
      type12 : 0.25 //quarter pence
    };

    var values = {
      input0 : {
        value:0,
        inputValue:0,
        subType:0
      },
      input1 : {
        value:0,
        inputValue:0,
        subType:1
      },
      input2 : {
        value:0,
        inputValue:0,
        subType:2
      },
      input3 : {
        value:0,
        inputValue:0,
        subType:3
      }
    };

    $scope.assignValues = function() {
      if (inputType ==0) {
        values["input"+inputType]["value"] = inputNN;
      } else {
        values["input"+inputType]["value"] = inputNN * choice["type" + inputSubType];
      }
      values["input" + inputType]["inputValue"] = inputNN;
      console.log("Value in d: " + values["input"+inputType]["value"]);
      console.log("Value in its units: " + values["input" + inputType]["inputValue"]);

    };

    //This function formats number //IMPORTANT: MAYBE PASS HERE TYPE AND ADD IT TO OR clause
    //Need to do format when value is larger than the value should be all decimals need to go to
    $scope.formatOutputDev = function() {
      console.log("Format Output");
      var input0 = values.input0.value;
      var input1 = values.input1.value;
      var input2 = values.input2.value;
      var input3 = values.input3.value;

      console.log("input0: " + input0 + "; input1: " + input1 + "; input2: " + input2 + "; input3: " + input3);
      formattedOutput="";
      if (inputType == 0 && (input1 ==0 && input2 ==0 && input3==0) ) {
        console.log("Input Type Decimal");
        console.log("value0: " + input0);
        formattedOutput = input0;
        totalAmount=input0;
        currentNumber=input0;
      } else {
        values.input0.value=0;
        values.input0.inputValue=0;
        if (input1 != 0) { //IMPORTANT or maybe here if !=0 then *10 + value
          console.log("Input Type Pound");
          formattedOutput += "£ " + (input1/240);
          console.log("value1: " + input1);
        };
        if (input2 != 0 ) {
          console.log("Input Type Shilling");
          formattedOutput += "   " + (input2/12) + "S";
          console.log("value2: " + input2);

        };
        if (input3 != 0 ) {
          console.log("Input Type Pence");
          formattedOutput += "   " + input3 + "d";
          console.log("value3: " + input3);

        };
        if (input0==0 && input1 == 0 && input2 ==0 && input3==0) {
          console.log("Input value == 0");
          formattedOutput = "0";
        };
        //totalDecAmount = input0; //total dec amount
        totalAmount = input1 + input2 + input3;
        currentNumber = input1 + input2 + input3;
      };
      console.log("Format Output to the screen, value - " + formattedOutput);
      $scope.output = formattedOutput;

    };

    //This function updates number 0,1,2,3 by multiplying it by type
    // this should only append to a string of common number input
    $scope.updateOutputDev = function(number) { //IMPORANT: HERE NEED TO ADD TO NUMBER NOT REPLACE IF EXISTS
      //IMPORTANT: inputStr = input0 or input1 or input2 or input3 depending on switch maybe have values object???
      if (values["input"+inputType]["inputValue"] != 0 && inputType!=0) {
        inputStr = values["input"+inputType]["inputValue"].toString();
      }
      inputStr += number;
      console.log(parseFloat(inputStr));
      console.log("input String: " + inputStr + " number: " + number);
      if (inputType==0) { //if decimal then parse float, else parse as INT
        inputNN = parseFloat(inputStr); //converting to number, but without type just in plain £, S or D
      } else {
        inputNN = parseInt(inputStr|0);//converting to number, but without type just in plain £, S or D
      }
      console.log("Input NN: " + inputNN);
      $scope.assignValues();
      $scope.formatOutputDev();
    };


    //need an intermediate step to convert from string to number
    $scope.updateTypeDev = function(type, subtype) {
      $scope.toggle1 = "";
      $scope.toggle2 = "";
      $scope.toggle3 = "";
      $scope["toggle" + type] = "toggled";

      var inputStringType = "type" + subtype; //IMPORTANT: SWITCH TYPE HERE
      multiplier = choice[inputStringType];
      console.log("Multiplier value: " + multiplier);
      console.log("Input Type: type"+type);
      if (inputType == 0) {
        values.input0.value = 0;
        values.input0.subType=0;
        inputType=type;
        $scope.formatOutputDev(); //for the first input after operation
      } else {
        inputStr="0";
      };
      inputSubType = subtype;
      inputType = type;
    };

    $scope.deleteOutputDev = function() { //here needs a SWITCH to delete the value in particular space
      console.log("Delete only single number");
      values["input" + inputType].value = 0;
      values["input" + inputType].inputValue = 0;
      inputStr="";
      inputNN=0;
      $scope.formatOutputDev();
    };

    $scope.deleteAllOutputDev = function() { //here needs a SWITCH to delete the value in particular space
      console.log("Delete whole number");
      $scope.resetInput();
      $scope.previousInput = "";
      previousTotal = 0;
      totalAmount=0;
    };

    $scope.resetInput = function() {
      inputType=0;
      inputStr="";
      inputNN=0;
      values.input0.value=0;
      values.input0.inputValue=0;
      values.input1.value=0;
      values.input1.inputValue=0;
      values.input2.value=0;
      values.input2.inputValue=0;
      values.input3.value=0;
      values.input3.inputValue=0;
      $scope.toggle1 = "";
      $scope.toggle2 = "";
      $scope.toggle3 = "";
      $scope.formatOutputDev();


    };

    $scope.performEqualsDev = function() {
      $scope.performCalculation(storeOperator);
      if ($scope.previousInput != "") {
        $scope.previousInput += $scope.output + " =";
      };
      $scope.reformatNumbers();
      $scope.formatOutputDev();

      if ($scope.previousInput != "") {
        $scope.localStorageArray.value.push($scope.previousInput + " " + $scope.output);
        $scope.saveLocalStorage();
      };


      previousNumber=0;
      storeOperator="";


      //console.log($scope.localStorageArray.calculation);

    };

    $scope.reformatNumbers = function() {
      console.log("Formatting - " + totalAmount);
      var value1 = values.input1.inputValue = Math.floor(totalAmount/240);
      var value2 = values.input2.inputValue = Math.floor((totalAmount - (value1*240))/12);
      var value3 = values.input3.inputValue = totalAmount - value1*240 - value2*12;
      console.log("value1: " + value1 + ",value2: " + value2 + ",value3: " +value3);
      values.input1.value = value1*240;
      values.input2.value = value2*12;
      values.input3.value = value3;
      //inputType=0;
    };

    $scope.performAddDev = function() {
      console.log("----------------Perform Add started----------------");
      if (storeOperator == "") {
        console.log("Operator is blank i.e. first number");
        previousNumber = currentNumber;
      } else {
        console.log("Operator for previous calculation is: " + storeOperator);
        $scope.performCalculation(storeOperator);
        previousNumber = currentNumber;
      };
      $scope.previousInput += $scope.output + " +";
      storeOperator = "+";
      $scope.resetInput();
      console.log("Operator set to " + storeOperator);
    };

    $scope.performSubDev = function() {
      console.log("----------------Perform Sub started----------------");
      if (storeOperator == "") {
        console.log("Operator is blank i.e. first number");
        previousNumber = currentNumber;
      } else {
        console.log("Operator for previous calculation is: " + storeOperator);
        $scope.performCalculation(storeOperator);
        previousNumber = currentNumber;
      };
      $scope.previousInput += $scope.output + " -";
      storeOperator = "-";
      $scope.resetInput();
      console.log("Operator set to " + storeOperator);
    };

    $scope.performMultiplication = function() {
      console.log("----------------Perform Multi  started----------------");
      if (storeOperator == "") {
        console.log("Operator is blank i.e. first number");
        previousNumber = currentNumber;
      } else {
        console.log("Operator for previous calculation is: " + storeOperator);
        $scope.performCalculation(storeOperator);
        previousNumber = currentNumber;
      };
      $scope.previousInput = "(" + $scope.previousInput + $scope.output + ") *";
      storeOperator = "*";
      $scope.resetInput();
      console.log("Operator set to " + storeOperator);
    };

    $scope.performDivision = function() {
      console.log("----------------Perform Division  started----------------");
      if (storeOperator == "") {
        console.log("Operator is blank i.e. first number");
        previousNumber = currentNumber;
      } else {
        console.log("Operator for previous calculation is: " + storeOperator);
        $scope.performCalculation(storeOperator);
        previousNumber = currentNumber;
      };
      $scope.previousInput = "(" + $scope.previousInput + $scope.output + ") /";
      storeOperator = "/";
      $scope.resetInput();
      console.log("Operator set to " + storeOperator);
    };


    $scope.performCalculation = function(operator) {
      switch(operator) {
        case "+" :
          result = previousNumber + currentNumber;
          console.log("Result: " + result + "previous Number: " + previousNumber + "currentNumber: " + currentNumber);
          break;
        case "-" :
          result = previousNumber - currentNumber;
          console.log("Result: " + result + "previous Number: " + previousNumber + "currentNumber: " + currentNumber);
          break;
        case "/" :
          result = previousNumber / currentNumber;
          break;
        case "*" :
          result = previousNumber * currentNumber;
          break;
      };
      totalAmount = result;
      currentNumber = result;
      console.log("Total Amount after perform calculation: " + totalAmount);

    };

    //most commonly used values - placeholder
    $scope.mostCommon = [
      "11£ 3d 5s", "1£ 3d 5s", "41£ 13d 2s"
    ]
});
