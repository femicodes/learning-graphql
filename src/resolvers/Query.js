function feed(parent, args, context, info) {
  return context.prisma.links()
}

function users(parent, args, context, info) {
  return context.prisma.users()
}

module.exports = {
  feed,
  users
}
