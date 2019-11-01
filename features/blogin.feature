Feature: Modakrakyat P2P Borrower Login
  As borrower I Want To Login To Modalrakyat P2P

  Scenario: Login With Valid Username
    Given borrower is at p2p login page
    Then borrower will see p2p login page
    When borrower login as "ACTIVE_BORROWER"
    Then borrower will see borrower dashboard page
  
  
    