import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
actor {
var owner: Principal = Principal.fromText("dhahj-k55nz-744ow-t47cn-tztwp-bx3hn-e3ksp-vz6nz-d4bpp-ibj5z-nqe");
var totalSupply: Nat = 1000000000;
var symbol: Text = "DANG";
//ledger creation
var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal,Principal.hash);
balances.put(owner, totalSupply);

public query func balanceOf( who:Principal): async Nat{
  //options address ?Nat
  let balance : Nat = switch (balances.get(who)) {
  case null 0;
  case (?result) result;
};

return balance;
};

public query func getSymbol() : async Text{
 return symbol;
};

public shared(msg) func payOut(): async Text{
   Debug.print(debug_show(msg.caller));
  //check if a user already has claimed tokens
  if(balances.get(msg.caller) == null){
  let amount = 10000;
  balances.put(msg.caller, amount);

  return "Success";
  }else {
   return "Already Claimed";
  }  
};

public shared(msg) func transfer(to:Principal, amount:Nat): async Text{
  let fromBalance = await balanceOf(msg.caller) ;

  if(fromBalance > amount){
    let newFromBalance: Nat = fromBalance - amount;
    balances.put(msg.caller, newFromBalance);

    let ToBalance = await balanceOf(to);
    let newToBalance = ToBalance + amount;
    balances.put(to, newToBalance);
    
   return "Success";
  }else{
   return "Insufficient Funds";
  }
  
};

};