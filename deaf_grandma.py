def deaf_grandma():
  byeCount = 0
  response = ''
  while byeCount < 2:
      response = input('What do you want to say to Grandma??')
      if response == '':
        print('WHAT?')
      elif response == 'GOODBYE!' and byeCount < 1:
        print('Leaving so soon?')
        byeCount +=1
      elif response.isupper() and response != 'GOODBYE!':
        print('NO NOT SINCE 1946!')
      elif not response.isupper():
        print('SPEAK UP KID!')
      else:
        print('LATER SKATER!')
        byeCount +=1


deaf_grandma()
