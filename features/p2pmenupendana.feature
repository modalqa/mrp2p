Feature: Modakrakyat P2P Lender Check Menu
  As Lender I Want To Login To Modalrakyat and check link

Scenario: Check feature menu on pendana
    Given lender is at p2p login page
    Then lender will see p2p login page
    When lender login as "ACTIVE_LENDER"
    Then lender will see lender dashboard page
    When lender click sidebar menu
    Then lender click referral
    When lender click sidebar menu
    Then lender click panduan
    When lender click sidebar menu
    Then lender click peluang pendanaan
    When lender click sidebar menu
    Then lender click inbox
    When lender click sidebar menu
    Then lender click portofolio
    When lender click sidebar menu
    Then lender click akun