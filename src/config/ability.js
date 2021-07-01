import { Ability, AbilityBuilder } from "@casl/ability"
import store from "../redux/store"

// Defines how to detect object's type
function subjectName(item) {
    if (!item || typeof item === "string") {
      return item
    }
    return item.__type
  }
  
  const ability = new Ability([], { subjectName })
  
  let currentAuth
  store.subscribe(() => {
    const prevAuth = currentAuth
    currentAuth = store.getState().auth
    if (prevAuth !== currentAuth) {
      ability.update(defineRulesFor(currentAuth))
    }
  })
  
  function defineRulesFor(auth) {
    const { can, rules } = AbilityBuilder.extract()
    if (auth.role === "researcher") {
      can("view", "Proposal")
      can("view", "Draft")
      can("apply", "Proposal")
      can("view", "Profile")
      can("view", "Teams")
    }
    if (auth.role === "admin") {
      can("add", "Proposal")
      can("view", "Proposal")
      can("accept", "Application")
      can("reject", "Application")
      can("view", "PendingReviews")
    }
    if (auth.role === "reviewer") {
      can("review", "Proposal")
    }
    return rules
  }
  
  export default ability