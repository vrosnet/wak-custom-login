﻿(function(w, $, a, m){		function filterEvent(e){		e.stopPropagation();		e.preventDefault();			return false;	}		//disable text selection on page		$('body').on('selectstart', filterEvent).on('drop', filterEvent).on('dragover', filterEvent).css({		'-webkit-user-select':'none',		'-moz-user-select':'none',		'-ms-user-select':'none',		'-o-user-select':'none',		'user-select':'none'	});		//jQuery references to page elements		var loginUser$ = $('#login-user');	var loginPassword$ = $('#login-password');	var loginButton$ = $('#login-button');	var modalBodyText$ = $('#modal-body-text');	var modalCloseButton$ = $('#modal-close-button');	var modalDialogDisplayButton$ = $('#modal-dialog-display-button');										function displayAlert(message, dismiss){		modalBodyText$.text(message);		modalCloseButton$.text(dismiss);		modalDialogDisplayButton$.click();	};			loginButton$.click(function(){		//http://doc.wakanda.org/Directory/Directory-Class/loginByPassword.301-815260.en.html		w.directory.login(loginUser$.val(), loginPassword$.val(), {			'onSuccess':function(e){				console.log(e);				if(e.result === true){					alertify.success('signed in as ' + w.directory.currentUser().fullName);				}else{					displayAlert('user name or password is incorrect!', 'close');				}			},			'onError': function(e){				displayAlert('error while connecting to the server.', 'close');			}			});			});			loginUser$.on('keydown', function(e){		if (e.keyCode === 13){			loginPassword$.focus();		}	});		loginPassword$.on('keydown', function(e){		if (e.keyCode === 13){			loginButton$.click();		}	});		a.set({'delay':1500});    m.lang(navigator.language);	    		w.onAfterInit = function(){				//just cosmetic, no impact on performance		window.history.replaceState('Object', 'Title', '/');		//only allow click after the WAF is ready		loginButton$.removeClass('disabled');	};		})(WAF, jQuery, alertify, moment);