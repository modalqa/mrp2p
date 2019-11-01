Feature: Modakrakyat P2P Lender Mendanai
  As Lender I Want To Login To Modalrakyat and mendanai

Scenario: Mendanai in Modalrakyat
    Given lender is at p2p login page
    Then lender will see p2p login page
    When lender login as "ACTIVE_LENDER"
    Then lender will see lender dashboard page
    When lender click button mulai mendanai
    Then lender directed to marketplace
    When lender click button detail
    Then lender can input nominal amount